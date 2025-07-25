import type { Metadata } from 'next';
import '@/shared/styles/styles.scss';
import Navbar from '@/shared/components/navbar/navbar.component';


export const metadata: Metadata = {
  title: 'REGISTER',
  description: 'Register page',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='container mx-auto px-2 my-5'>
      <Navbar />
      {children}
    </div>
  );
}
