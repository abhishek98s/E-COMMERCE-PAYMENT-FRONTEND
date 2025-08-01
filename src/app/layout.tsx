import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import '@/shared/styles/styles.scss';
import Navbar from '@/shared/components/navbar/navbar.component';
import { CartProvider } from '@/shared/context/cart.context';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '@/shared/context/auth.context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <div className=''>{children}</div>
          </CartProvider>
        </AuthProvider>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </body>
    </html>
  );
}
