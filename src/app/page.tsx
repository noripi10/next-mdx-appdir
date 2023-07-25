import Link from 'next/link';

import fs from 'fs/promises';
import path from 'path';

import Hello from './hello.mdx';
import { ToggleTheme } from '@/components/ToggleTheme';

const getBlogList = async () => {
  const blogDir = 'src/app/blog';
  const list = await fs.readdir(path.join(process.cwd(), blogDir), {});
  const blogs = list.filter((row) => !row.endsWith('.tsx'));

  return blogs;
};

export default async function Home() {
  const blogList = await getBlogList();
  return (
    <div className='flex flex-col gap-2 px-2'>
      <div className='py-6'>
        <Hello />
      </div>

      <div className='p-4'>
        <h2>Blog List</h2>
        <ul className='flex gap-4 flex-wrap'>
          {blogList.map((blog) => (
            <Link key={blog} href={`/blog/${blog}`} passHref>
              <li className='underline'>{blog}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='border p-2'>
        <h3>tailwind.css + change noflash with cookie</h3>
        <div>
          <code>https://github.com/vercel/next.js/discussions/47952</code>
        </div>
      </div>

      <div className='border p-2'>
        <h3>mdx syntax highlight</h3>
        <div>
          <code>https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype</code>
          <br />
          <code>https://rehype-pretty-code.netlify.app/</code>
          <br />
          <code>https://unpkg.com/browse/shiki@0.14.2/themes/</code>
        </div>
      </div>
    </div>
  );
}
