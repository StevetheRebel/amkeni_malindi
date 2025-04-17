import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(
        env.VITE_WPCOM_CLIENT_ID ? "configured" : "missing"
      ),
    },
    server: {
      port: 5173,
      strictPort: true, // Prevents automatic port switching
    },
    preview: {
      port: 5173,
    },
  };
});
