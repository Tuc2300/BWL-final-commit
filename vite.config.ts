import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "mint-penguin-ideal.ngrok-free.app", // Füge deine ngrok-Domain hier ein
      // Füge weitere erlaubte Hosts bei Bedarf hinzu
    ]
  }
});