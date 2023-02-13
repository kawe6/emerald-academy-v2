import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getHeadings } from './src/lib/utilities/remarkPlugins/getHeadings.js';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	layout: 'src/lib/components/mdsvex/CourseLayout.svelte',
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	remarkPlugins: [getHeadings]
});

export default config;
