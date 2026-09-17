import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rausch: "#FF385C",
        rausch2: "#E31C5F",
        rausch3: "#D70466",
        ink: "#222222",
        body: "#484848",
        muted: "#717171",
        hairline: "#DDDDDD",
        panel: "#F7F7F7",
      },
      maxWidth: {
        page: "1120px",
        card: "372px",
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
      },
      transitionTimingFunction: {
        airbnb: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
