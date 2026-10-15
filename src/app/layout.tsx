import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'WONDER — Interior Design Studio',
  description: 'Thoughtful interiors with character — shaped around the way you live. Interior Design, Space Planning, Furniture & Materials, and Design Support.',
  applicationName: 'WONDER',
  openGraph: {
    title: 'WONDER — Interior Design Studio',
    description: 'Spaces that feel like you. Contemporary interior design, space planning and material direction.',
    type: 'website',
    images: ['/images/coastal-interior.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f2efe8',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body className="font-sans">{children}</body></html>;
}
