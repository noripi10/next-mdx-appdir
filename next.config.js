/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    // mdxRs: true,
  },
};

// https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
// https://rehype-pretty-code.netlify.app/
const rehypePrettyCode = require('rehype-pretty-code');

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
