"use client";

import { useState } from "react";
import type { OutlineNode } from "@/data/outlines";

function outlineToText(nodes: OutlineNode[], indent = 0): string {
  const lines: string[] = [];
  for (const node of nodes) {
    lines.push("  ".repeat(indent) + node.text);
    if (node.children) {
      lines.push(outlineToText(node.children, indent + 1));
    }
  }
  return lines.join("\n");
}

export function CopyOutlineButton({ content }: { content: OutlineNode[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = outlineToText(content);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs text-charcoal-light/60 hover:text-ocean transition-colors font-medium"
      title="Copy outline as text"
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
        <path d="M10.5 5.5V3.5a1.5 1.5 0 0 0-1.5-1.5H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h2" />
      </svg>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
