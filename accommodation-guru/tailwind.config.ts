import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ivory: "#FBF8F3", sand: "#E9DCC6", gold: "#C9A66B", ocean: "#0F3D44", charcoal: "#1E2A2D", mist: "#EEF3F2" } } },
  plugins: []
};
export default config;
