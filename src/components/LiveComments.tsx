"use client";

import { useState, useEffect } from "react";

interface FormSubmission {
  id: string;
  created_at: string;
  data: {
    "form-name": string;
    "outline-slug"?: string;
    "song-title"?: string;
    "feedback-type"?: string;
    name?: string;
    content?: string;
  };
}

export function LiveComments({ outlineSlug }: { outlineSlug?: string }) {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch("/.netlify/functions/comments");
        if (res.ok) {
          const data = await res.json();
          setSubmissions(data);
        }
      } catch {
        // silently fail — comments just won't show
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, []);

  const filtered = outlineSlug
    ? submissions.filter((s) => s.data["outline-slug"] === outlineSlug)
    : submissions;

  if (loading) {
    return (
      <p className="text-xs text-charcoal-light/40 italic py-2">Loading comments...</p>
    );
  }

  if (filtered.length === 0) return null;

  return (
    <div>
      <h3 className="font-semibold text-charcoal mb-4">
        Comments ({filtered.length})
      </h3>
      <div className="space-y-3">
        {filtered.map((s) => {
          const d = new Date(s.created_at);
          const dateStr = `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${String(d.getFullYear()).slice(2)}`;
          return (
            <div
              key={s.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm p-4"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-charcoal">
                    {s.data.name || "Anonymous"}
                  </span>
                  {s.data["feedback-type"] === "edit" && (
                    <span className="text-[0.55rem] font-semibold text-ocean-deep bg-ocean/10 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                      Edit Suggestion
                    </span>
                  )}
                </div>
                <span className="text-xs text-charcoal-light/50">{dateStr}</span>
              </div>
              {!outlineSlug && s.data["song-title"] && (
                <p className="text-xs text-ocean mb-1">Re: {s.data["song-title"]}</p>
              )}
              <p className="text-sm text-charcoal-light leading-relaxed whitespace-pre-wrap">
                {s.data.content || ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
