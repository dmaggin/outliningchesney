"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-4">🎸</p>
        <h1 className="text-2xl font-display font-bold text-charcoal mb-3">
          Outline Received!
        </h1>
        <p className="text-charcoal-light mb-6">
          We&apos;ll review it and add it to the collection. Very listevious of you.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm font-semibold text-ocean hover:text-ocean-dark transition-colors"
          >
            Submit another
          </button>
          <Link
            href="/browse"
            className="text-sm font-semibold text-charcoal-light hover:text-charcoal transition-colors"
          >
            Browse outlines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-charcoal mb-2">
        Submit an Outline
      </h1>
      <p className="text-charcoal-light mb-8">
        Got a song that needs outlining? Reduce it to bullet points and send it our way.
        Remember: Chesney songs outline best. But we welcome all attempts.
      </p>

      <form
        name="outline-submission"
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
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="outline-submission" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        {/* Your name */}
        <div>
          <label htmlFor="submitter" className="block text-sm font-medium text-charcoal mb-1">
            Your name or initials
          </label>
          <input
            type="text"
            id="submitter"
            name="submitter"
            required
            placeholder="e.g. DMM"
            className="w-full px-4 py-2.5 bg-white/90 border border-ocean/15 rounded-xl text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
          />
        </div>

        {/* Song title */}
        <div>
          <label htmlFor="song-title" className="block text-sm font-medium text-charcoal mb-1">
            Song title
          </label>
          <input
            type="text"
            id="song-title"
            name="song-title"
            required
            placeholder="e.g. American Kids"
            className="w-full px-4 py-2.5 bg-white/90 border border-ocean/15 rounded-xl text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
          />
        </div>

        {/* Artist */}
        <div>
          <label htmlFor="artist" className="block text-sm font-medium text-charcoal mb-1">
            Artist
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            required
            placeholder="e.g. Kenny Chesney"
            className="w-full px-4 py-2.5 bg-white/90 border border-ocean/15 rounded-xl text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
          />
        </div>

        {/* Outline */}
        <div>
          <label htmlFor="outline" className="block text-sm font-medium text-charcoal mb-1">
            The outline
          </label>
          <p className="text-xs text-charcoal-light/60 mb-2">
            Use indentation (spaces or tabs) to show hierarchy. The structure IS the content.
          </p>
          <textarea
            id="outline"
            name="outline"
            required
            rows={14}
            placeholder={`I've been\n  Up to my neck\n  Working 6 days a week\n  Wearin holes in the soles of the shoes of my feet\n[Chorus] No\n  shoes\n  shirt\n  problems`}
            className="w-full px-4 py-3 bg-white/90 border border-ocean/15 rounded-xl text-sm font-mono text-charcoal placeholder:text-charcoal-light/30 focus:outline-none focus:ring-2 focus:ring-ocean/30 resize-y"
          />
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-charcoal mb-1">
            Notes <span className="font-normal text-charcoal-light/50">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Any commentary, context, or reasons this song is particularly listevious..."
            className="w-full px-4 py-3 bg-white/90 border border-ocean/15 rounded-xl text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30 resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-ocean hover:bg-ocean-dark text-white font-semibold py-3 rounded-full transition-colors shadow-lg shadow-ocean/20"
        >
          Submit Outline
        </button>
      </form>
    </div>
  );
}
