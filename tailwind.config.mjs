/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'subtitle-color':'#696969',
				'text-color':'#696969',
				'title-color': '#171717',
				'input-color': '#E3E3E3',
				'input-placeholder' : '#585858',
				'hover-button':'#383838',
				'border-button':'#E0E0E0',
				'menu-text': '#666',
			},
			fontSize: {
				'3xl':'32px'
			}
		},
	},
	plugins: [],
}
