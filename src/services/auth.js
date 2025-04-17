import apiFetch from "@wordpress/api-fetch";

// 1. Add validation for environment variables
const getEnvVars = () => {
  const clientId = import.meta.env.VITE_WPCOM_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_WPCOM_CLIENT_SECRET;
  const redirectUri = import.meta.env.VITE_WPCOM_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    console.error("Missing WordPress.com OAuth environment variables!");
    console.table({
      VITE_WPCOM_CLIENT_ID: clientId ? "✅ Present" : "❌ Missing",
      VITE_WPCOM_CLIENT_SECRET: clientSecret ? "✅ Present" : "❌ Missing",
      VITE_WPCOM_REDIRECT_URI: redirectUri ? "✅ Present" : "❌ Missing",
    });
    throw new Error("OAuth configuration incomplete");
  }

  return { clientId, clientSecret, redirectUri };
};

// 2. Enhanced OAuth initiation
export const initiateOAuth = () => {
  try {
    const { clientId, redirectUri } = getEnvVars();

    const authUrl = new URL(
      "https://public-api.wordpress.com/oauth2/authorize"
    );
    authUrl.searchParams.append("client_id", clientId);
    authUrl.searchParams.append("redirect_uri", redirectUri);
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("scope", "posts");
    authUrl.searchParams.append("blog", "amkenimalindi.wordpress.com"); // Specific to your site

    console.debug("Initiating OAuth with URL:", authUrl.toString());
    window.location.href = authUrl.toString();
  } catch (error) {
    console.error("OAuth initiation failed:", error.message);
    // Consider showing a user-friendly error in your UI
    throw error;
  }
};

// 3. More robust token exchange
export const getAccessToken = async (code) => {
  try {
    const { clientId, clientSecret, redirectUri } = getEnvVars();

    console.debug("Exchanging code for token...");
    const response = await apiFetch({
      path: "/oauth2/token",
      method: "POST",
      data: {
        client_id: clientId,
        client_secret: clientSecret,
        code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
      },
      parse: false, // Important for non-WP API responses
    });

    const data = await response.json();

    if (!data.access_token) {
      throw new Error(data.message || "No access token received");
    }

    console.debug("Token exchange successful");
    return data.access_token;
  } catch (error) {
    console.error("Token exchange failed:", error);

    // Specific error handling
    if (error?.data?.error_description) {
      throw new Error(error.data.error_description);
    }

    throw new Error("Authentication failed. Please try again.");
  }
};

// 4. Utility function (optional)
export const isAuthenticated = () => {
  return !!localStorage.getItem("wpcom_token");
};
