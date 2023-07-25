'use client';

import { useEffect } from 'react';

export const ToggleTheme = ({ theme }: { theme: string }) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      className='bg-blue-500 text-white rounded p-1 text-sm'
      onClick={() => {
        // const currentTheme = localStorage.getItem('theme');
        const root = document.getElementsByTagName('html')[0];
        root.classList.toggle('dark');

        if (root.classList.contains('dark')) {
          document.cookie = `theme=dark`;
        } else {
          document.cookie = `theme=light`;
        }
      }}
    >
      Toggle Theme
    </button>
  );
};
