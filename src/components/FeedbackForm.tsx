"use client";

import { useState } from "react";

export function FeedbackForm({ outlineSlug, songTitle }: { outlineSlug: string; songTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<"comment" | "edit">("comment");

  if (submitted) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 p-5 text-center">
        <p className="text-charcoal font-medium">Thanks! We&apos;ll take a look.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-ocean hover:text-ocean-dark mt-2 transition-colors"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5 sm:p-6">
      <h3 className="font-semibold text-charcoal mb-4">Leave Feedback</h3>

      {/* Type toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setType("comment")}
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
            type === "comment"
              ? "bg-ocean text-white"
              : "bg-white/60 text-charcoal-light hover:bg-white"
          }`}
        >
          Comment
        </button>
        <button
          onClick={() => setType("edit")}
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
            type === "edit"
              ? "bg-ocean text-white"
              : "bg-white/60 text-charcoal-light hover:bg-white"
          }`}
        >
          Suggest an Edit
        </button>
      </div>

      <form
        name="outline-feedback"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
          })
            .then(() => setSubmitted(true))
            .catch(() => setSubmitted(true));
        }}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="outline-feedback" />
        <input type="hidden" name="outline-slug" value={outlineSlug} />
        <input type="hidden" name="song-title" value={songTitle} />
        <input type="hidden" name="feedback-type" value={type} />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label htmlFor="feedback-name" className="block text-xs font-medium text-charcoal mb-1">
            Your name or initials
          </label>
          <input
            type="text"
            id="feedback-name"
            name="name"
            required
            placeholder="e.g. DMM"
            className="w-full px-3 py-2 bg-white/90 border border-ocean/15 rounded-lg text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
          />
        </div>

        <div>
          <label htmlFor="feedback-content" className="block text-xs font-medium text-charcoal mb-1">
            {type === "comment" ? "Your comment" : "What would you change?"}
          </label>
          <textarea
            id="feedback-content"
            name="content"
            required
            rows={type === "edit" ? 6 : 4}
            placeholder={
              type === "comment"
                ? "Very listevious..."
                : 'e.g. "Line 3 should be indented under line 2" or paste your revised version'
            }
            className="w-full px-3 py-2 bg-white/90 border border-ocean/15 rounded-lg text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30 resize-y font-mono"
          />
        </div>

        <button
          type="submit"
          className="bg-ocean hover:bg-ocean-dark text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors"
        >
          {type === "comment" ? "Post Comment" : "Submit Edit Suggestion"}
        </button>
      </form>
    </div>
  );
}
