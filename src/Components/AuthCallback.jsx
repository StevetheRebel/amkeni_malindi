import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAccessToken } from "../services/auth";

export default function AuthCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      getAccessToken(code).then((token) => {
        localStorage.setItem("wpcom_token", token);
        navigate("/");
      });
    }
  }, [location, navigate]);

  return <div>Authenticating...</div>;
}
