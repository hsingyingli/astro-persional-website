import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import rehypeSlug from 'rehype-slug';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'nord',
      langs: ['go', 'ts', 'js', 'py', 'html', 'css', 'astro'],
      wrap: false,
    },
    remarkPlugins: [[remarkToc, { heading: "contents" }]],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
    drafts: true,
  },
  integrations: [tailwind(), react(), mdx({
    drafts: true,
  })]
});
