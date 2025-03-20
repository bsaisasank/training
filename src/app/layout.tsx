'use client';
import { Poppins } from 'next/font/google';
/** custom styles */
import '../styles/globals.css';
import '../styles/grid.css';
import '../styles/texts.css';
/** components */
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const font = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable}`}>
        <div className="layout-container">
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
