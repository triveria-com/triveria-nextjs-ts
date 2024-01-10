import './globals.css';

import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'Triveria Wallet Sample App',
  description:
    'A credentials admin dashboard configured with Triveria TS SDK, and Next.js.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Toast />
      </body>
    </html>
  );
}
