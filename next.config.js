/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    // mdxRs: true,
  },
};

// ★rehype-pretty-code
// https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
// https://rehype-pretty-code.netlify.app/
const rehypePrettyCode = require('rehype-pretty-code');

// Theme(light, dark)２つ分のコンポーネントが作られる
// Toggle Button での　Root Class (.light .dark)で表示を切り替える
/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

module.exports = withMDX(nextConfig);
