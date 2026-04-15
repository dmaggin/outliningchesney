import type { OutlineNode } from "@/data/outlines";
import { CopyOutlineButton } from "./CopyOutlineButton";

function OutlineNodeComponent({ node, depth = 0 }: { node: OutlineNode; depth?: number }) {
  return (
    <div className="outline-node" style={{ marginLeft: depth > 0 ? "1.25rem" : 0 }}>
      <span className="text-charcoal">{node.text}</span>
      {node.children && (
        <div className="mt-0.5">
          {node.children.map((child, i) => (
            <OutlineNodeComponent key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function OutlineRenderer({ content }: { content: OutlineNode[] }) {
  return (
    <div className="outline-content relative bg-white/90 backdrop-blur-sm rounded-xl border border-white/60 p-5 sm:p-8 shadow-lg shadow-ocean/10">
      <div className="absolute top-3 right-3">
        <CopyOutlineButton content={content} />
      </div>
      {content.map((node, i) => (
        <OutlineNodeComponent key={i} node={node} />
      ))}
    </div>
  );
}
