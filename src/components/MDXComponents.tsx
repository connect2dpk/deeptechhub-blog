import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from './CodeBlock';

export const MDXComponents = {
  h1: ({ ...props }: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props} />
  ),
  h2: ({ ...props }: any) => (
    <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4" {...props} />
  ),
  h3: ({ ...props }: any) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
  ),
  p: ({ ...props }: any) => (
    <p className="text-lg leading-8 mb-4 text-gray-700 dark:text-gray-300" {...props} />
  ),
  a: ({ ...props }: any) => (
    <a
      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: ({ children, className, ...props }: any) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm" {...props}>
          {children}
        </code>
      );
    }
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
  pre: ({ children }: any) => children, // Handled by CodeBlock
  blockquote: ({ ...props }: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 italic text-gray-700 dark:text-gray-300" {...props} />
  ),
  ul: ({ ...props }: any) => (
    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2" {...props} />
  ),
  ol: ({ ...props }: any) => (
    <ol className="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2" {...props} />
  ),
  li: ({ ...props }: any) => (
    <li className="ml-2" {...props} />
  ),
  img: (props: any) => (
    <Image
      className="rounded-lg my-4 w-full"
      {...props}
      alt={props.alt}
      width={800}
      height={400}
    />
  ),
  table: ({ ...props }: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700" {...props} />
    </div>
  ),
  th: ({ ...props }: any) => (
    <th className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-3 text-left" {...props} />
  ),
  td: ({ ...props }: any) => (
    <td className="border border-gray-300 dark:border-gray-700 p-3" {...props} />
  ),
};