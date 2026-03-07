'use client';

import { Highlight, themes } from 'prism-react-renderer';
import { useState } from 'react';

const CodeBlock = ({ children, className }: { children: string; className?: string }) => {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'text';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mb-4">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <Highlight theme={themes.vsDark} code={children.trim()} language={language}>
        {({ className: highlightClass, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${highlightClass} p-4 rounded-lg overflow-x-auto font-mono text-sm`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="inline-block w-8 text-gray-500 select-none mr-4">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;