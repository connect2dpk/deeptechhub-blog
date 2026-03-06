import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">DeepTechHub</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Deep dive into Java, Spring Boot, and modern backend technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/blog" className="hover:text-blue-600 transition">All Articles</Link></li>
              <li><Link href="https://github.com/connect2dpk" target="_blank" className="hover:text-blue-600 transition">GitHub</Link></li>
              <li><Link href="https://twitter.com/connect2dpk" target="_blank" className="hover:text-blue-600 transition">Twitter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/blog?category=java" className="hover:text-blue-600 transition">Java</Link></li>
              <li><Link href="/blog?category=springboot" className="hover:text-blue-600 transition">Spring Boot</Link></li>
              <li><Link href="/blog?category=databases" className="hover:text-blue-600 transition">Databases</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} DeepTechHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}