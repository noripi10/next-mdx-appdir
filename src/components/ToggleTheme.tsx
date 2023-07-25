'use client';

import { useEffect, useState } from 'react';

export const ToggleTheme = ({ theme }: { theme: string }) => {
  // 初期値(Init or Reload)はCookieから取得
  const [_theme, setTheme] = useState(theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <button
      className='bg-blue-500 text-white rounded p-1 text-sm'
      onClick={() => {
        const root = document.getElementsByTagName('html')[0];

        if (_theme === 'dark') {
          root.classList.add('light');
          root.classList.remove('dark');
          setTheme('light');
        } else {
          root.classList.add('dark');
          root.classList.remove('light');
          setTheme('dark');
        }

        // Reloadl時などのちらつき防止の為にCookieに保存しておく
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
