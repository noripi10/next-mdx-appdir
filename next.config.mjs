// ★rehype-pretty-code
// https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
// https://rehype-pretty-code.netlify.app/
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: {
    // mdxRs: true,
  },
};

// Theme(light, dark)２つ分のコンポーネントが作られる
// Toggle Button での　Root Class (.light .dark)で表示を切り替える
// https://github.com/antfu/shikiji/blob/main/docs/themes.md
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    light: 'material-theme-lighter',
    dark: 'rose-pine-moon',
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remark-gfm 4系にするとerror
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
