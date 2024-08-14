import type { Config } from "tailwindcss";
import defaultConfig from "base.tailwind.config";

const config: Config = {
	darkMode: defaultConfig.darkMode ?? [],
	content: ["./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			...defaultConfig.theme?.extend,
		},
	},
	plugins: [...(defaultConfig.plugins ?? [])],
};
export default config;
