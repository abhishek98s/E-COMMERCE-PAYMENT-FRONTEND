import type { Metadata } from 'next';
import '@/shared/styles/styles.scss';


export const metadata: Metadata = {
  title: 'REGISTER',
  description: 'Register page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className="__variable_5cfdac __variable_9a8899 antialiased"
      >
        <div className='container mx-auto px-2 my-5'>
          {children}
        </div>
      </body>
    </html>
  );
}
