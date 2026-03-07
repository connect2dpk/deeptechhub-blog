'use client';

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function MermaidComponent({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="my-6">
      <div ref={ref} className="mermaid">
        {chart}
      </div>
    </div>
  );
}