import type { Metadata } from 'next';
import '@/shared/styles/styles.scss';
 
export const metadata: Metadata = {
  title: 'E-commerce product app',
  description: 'E commerce app with cart',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='container mx-auto px-2 my-5'>{children}</div>
    </>
  );
}
