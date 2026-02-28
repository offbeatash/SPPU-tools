import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPPU Tools | CGPA & Percentage Calculators',
  description: 'Fast and accurate calculators for SPPU Engineering students based on official university circulars.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics via next/script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen flex flex-col`}>
        
        {/* Global Navbar */}
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-black tracking-tight text-white hover:text-orange-500 transition-colors">
              SPPU <span className="text-orange-500">Tools</span>
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/cgpa" className="text-slate-300 hover:text-orange-500 transition-colors">
                CGPA
              </Link>
              <Link href="/percentage" className="text-slate-300 hover:text-orange-500 transition-colors">
                Percentage
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-8">
          {children}
        </main>
        
        {/* Global Footer */}
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 mt-auto">
          <p>Built for SPPU Engineering Students (2019 & 2024 Patterns).</p>
        </footer>

      </body>
    </html>
  );
}