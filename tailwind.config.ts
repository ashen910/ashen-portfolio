import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  corePlugins: { preflight: false }, // portfolio ships its own base styles in globals.css
  theme: { extend: { colors: { accent: "#7c8cff", accent2: "#38e1c6" } } },
  plugins: [],
};
export default config;
