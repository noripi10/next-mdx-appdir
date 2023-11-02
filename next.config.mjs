import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: false,
  },
};

// ★rehype-pretty-code
// https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
// https://rehype-pretty-code.netlify.app/

// Theme(light, dark)２つ分のコンポーネントが作られる
// Toggle Button での　Root Class (.light .dark)で表示を切り替える
/** @type {import('rehype-pretty-code').Options} */
const options = {
  grid: true,
  theme: {
    light: 'github-light',
    dark: 'slack-dark',
  },
  keepBackground: false,
  defaultLang: {
    block: 'plaintext',
    inline: 'plaintext',
  },
  // tokensMap: {
  //   fn: 'entity.name.function',
  // },
  // filterMetaString: (string) => string.replace(/filename="[^"]*"/, ''),
  // getHighlighter: (options) => {},
  // onVisitLine(element) {
  //   console.log('Visited line');
  // },
  // onVisitHighlightedLine(element) {
  //   console.log('Visited highlighted line');
  // },
  // onVisitHighlightedChars(element) {
  //   console.log('Visited highlighted chars');
  // },
  // onVisitTitle(element) {
  //   console.log('Visited title');
  // },
  // onVisitCaption(element) {
  //   console.log('Visited caption');
  // },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);
