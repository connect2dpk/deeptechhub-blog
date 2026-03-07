import Image from 'next/image';
import Link from 'next/link';
import CodeBlock from './CodeBlock';
import ZoomableImage from './ZoomableImage';
import MermaidComponent from './MermaidComponent';

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
    if (className === 'language-mermaid') {
      return <MermaidComponent chart={String(children)} />;
    }
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
  pre: ({ children }: any) => children, // Handled by CodeBlock
  blockquote: ({ ...props }: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 dark:bg-blue-900/20 italic text-gray-700 dark:text-gray-300" {...props} />
  ),
  ul: ({ ...props }: any) => (
    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1" {...props} />
  ),
  ol: ({ ...props }: any) => (
    <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1" {...props} />
  ),
  li: ({ ...props }: any) => (
    <li {...props} />
  ),
  img: (props: any) => (
    <div className="my-4 flex justify-center">
      <ZoomableImage
        src={props.src}
        alt={props.alt || ''}
        className="rounded-lg max-w-full h-auto"
      />
    </div>
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
  figure: ({ ...props }: any) => (
    <figure className="my-6 flex flex-col items-center" {...props} />
  ),
  figcaption: ({ ...props }: any) => (
    <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic" {...props} />
  ),
};