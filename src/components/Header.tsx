'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DeepTechHub
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
          <li><Link href="https://github.com/connect2dpk" target="_blank" className="hover:text-blue-600 transition">GitHub</Link></li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <ul className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex flex-col gap-4 p-4 md:hidden">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
            <li><Link href="https://github.com/connect2dpk" target="_blank" className="hover:text-blue-600 transition">GitHub</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}