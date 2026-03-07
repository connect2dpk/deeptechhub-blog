export const metadata = {
  title: 'About - DeepTechHub',
  description: 'Learn more about DeepTechHub, a blog focused on Java, Spring Boot, and backend development.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
        About DeepTechHub
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Welcome to DeepTechHub, your go-to resource for in-depth technical articles focused on Java development, Spring Boot, microservices, and modern backend technologies.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe in empowering developers with comprehensive, practical knowledge that goes beyond surface-level tutorials. Our articles dive deep into complex topics, providing real-world examples and architectural insights that help you build better software.
        </p>

        <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Java programming best practices and advanced concepts</li>
          <li>Spring Boot application development and configuration</li>
          <li>Microservices architecture and design patterns</li>
          <li>Database design and optimization</li>
          <li>System design and scalability</li>
          <li>DevOps practices for Java applications</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">About the Author</h2>
        <p className="mb-6">
          DeepTechHub is maintained by Deepak Kumar, a passionate software engineer with extensive experience in Java and backend development. With years of industry experience, Deepak shares insights gained from working on large-scale enterprise applications and modern distributed systems.
        </p>

        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Have questions, suggestions, or want to collaborate? Feel free to reach out through our social channels or contribute to our open-source projects on GitHub.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/connect2dpk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/connect2dpk"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 px-6 py-2 rounded-lg font-semibold transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}