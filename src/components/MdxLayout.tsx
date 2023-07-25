import { ReactNode } from '@mdx-js/react/lib';

export const MdxLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 6,
      }}
    >
      {children}
    </main>
  );
};
