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
    <>
      <Navbar />
      <div className='container mx-auto px-2 my-5'>
        <div className="bg-neutral-0 border-neutral-100 rounded-[12px] p-4">
          {children}
        </div>
      </div>
    </>
  );
}
