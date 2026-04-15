"use client";

import { useState, useRef, useCallback, KeyboardEvent } from "react";

interface OutlineLine {
  id: number;
  text: string;
  depth: number;
}

const BULLET_COLORS = [
  "bg-ocean",     // depth 0
  "bg-sand",      // depth 1
  "bg-coral",     // depth 2
  "bg-ocean-light", // depth 3
];

const BULLET_SIZES = ["w-[7px] h-[7px]", "w-1.5 h-1.5", "w-1 h-1", "w-1 h-1"];

let nextId = 1;

function serializeOutline(lines: OutlineLine[]): string {
  return lines
    .filter((l) => l.text.trim() !== "")
    .map((l) => "  ".repeat(l.depth) + l.text)
    .join("\n");
}

export function OutlineEditor({
  name,
  required,
}: {
  name: string;
  required?: boolean;
}) {
  const [lines, setLines] = useState<OutlineLine[]>([
    { id: nextId++, text: "", depth: 0 },
  ]);
  const inputRefs = useRef<Map<number, HTMLInputElement>>(new Map());

  const focusLine = useCallback((id: number) => {
    // Small delay to let React render the new input
    setTimeout(() => {
      const el = inputRefs.current.get(id);
      if (el) {
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length);
      }
    }, 0);
  }, []);

  const updateLine = (id: number, text: string) => {
    setLines((prev) => prev.map((l) => (l.id === id ? { ...l, text } : l)));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const line = lines[index];

    if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey) {
        // Outdent
        if (line.depth > 0) {
          setLines((prev) =>
            prev.map((l) => (l.id === line.id ? { ...l, depth: l.depth - 1 } : l))
          );
        }
      } else {
        // Indent (max depth 4, can't indent deeper than parent + 1)
        const maxDepth = index > 0 ? lines[index - 1].depth + 1 : 0;
        if (line.depth < Math.min(maxDepth, 4)) {
          setLines((prev) =>
            prev.map((l) => (l.id === line.id ? { ...l, depth: l.depth + 1 } : l))
          );
        }
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const newLine: OutlineLine = {
        id: nextId++,
        text: "",
        depth: line.depth,
      };
      setLines((prev) => {
        const copy = [...prev];
        copy.splice(index + 1, 0, newLine);
        return copy;
      });
      focusLine(newLine.id);
    }

    if (e.key === "Backspace" && line.text === "" && lines.length > 1) {
      e.preventDefault();
      if (line.depth > 0) {
        // First backspace on empty line: outdent
        setLines((prev) =>
          prev.map((l) => (l.id === line.id ? { ...l, depth: l.depth - 1 } : l))
        );
      } else {
        // Already at depth 0 and empty: remove line
        const prevLine = lines[index - 1];
        setLines((prev) => prev.filter((l) => l.id !== line.id));
        if (prevLine) focusLine(prevLine.id);
      }
    }

    if (e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      focusLine(lines[index - 1].id);
    }

    if (e.key === "ArrowDown" && index < lines.length - 1) {
      e.preventDefault();
      focusLine(lines[index + 1].id);
    }
  };

  const serialized = serializeOutline(lines);

  return (
    <div>
      <div className="bg-white/90 border border-ocean/15 rounded-xl p-4 space-y-0.5 min-h-[200px]">
        {lines.map((line, index) => (
          <div key={line.id} className="flex items-center gap-1" style={{ paddingLeft: `${line.depth * 1.25}rem` }}>
            {/* Bullet */}
            <div className="flex-shrink-0 w-4 flex items-center justify-center">
              <div
                className={`rounded-full ${BULLET_COLORS[Math.min(line.depth, 3)]} ${BULLET_SIZES[Math.min(line.depth, 3)]}`}
              />
            </div>
            {/* Input */}
            <input
              ref={(el) => {
                if (el) inputRefs.current.set(line.id, el);
                else inputRefs.current.delete(line.id);
              }}
              type="text"
              value={line.text}
              onChange={(e) => updateLine(line.id, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              placeholder={index === 0 ? "Start typing your outline..." : ""}
              className="flex-1 bg-transparent text-sm font-mono text-charcoal placeholder:text-charcoal-light/30 focus:outline-none py-1"
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-charcoal-light/50 mt-2">
        <span className="font-medium">Tab</span> to indent &middot;{" "}
        <span className="font-medium">Shift+Tab</span> to outdent &middot;{" "}
        <span className="font-medium">Enter</span> for new line &middot;{" "}
        <span className="font-medium">Backspace</span> on empty to remove
      </p>
      {/* Hidden field with serialized outline for form submission */}
      <textarea
        name={name}
        value={serialized}
        readOnly
        required={required}
        className="hidden"
        aria-hidden="true"
      />
    </div>
  );
}
