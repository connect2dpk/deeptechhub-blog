import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'DeepTechHub - Java & Backend Development Blog',
  description: 'Deep dive into Java, Spring Boot, microservices, and modern backend technologies.',
  keywords: ['Java', 'Spring Boot', 'Backend', 'Software Engineering', 'Tutorials'],
  authors: [{ name: 'DeepTechHub' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deeptechhub.dev',
    siteName: 'DeepTechHub',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}