import type { Config } from "tailwindcss";
import defaultConfig from "@de-syd-projx/reactjs/base.tailwind.config";

const config: Config = {
	darkMode: defaultConfig.darkMode ?? [],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"@de-syd-projx/reactjs",
	],
	theme: {
		extend: {
			...defaultConfig.theme?.extend,
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [...(defaultConfig.plugins ?? [])],
};
export default config;
