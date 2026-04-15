"use client";

import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return (
      <div className="max-w-sm mx-auto px-4 py-24 text-center">
        <p className="text-4xl mb-4">🔒</p>
        <h1 className="text-xl font-display font-bold text-charcoal mb-4">Admin</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === "yyww?!") setUnlocked(true);
          }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2.5 bg-white/90 border border-ocean/15 rounded-xl text-sm text-charcoal text-center focus:outline-none focus:ring-2 focus:ring-ocean/30"
          />
          <button
            type="submit"
            className="mt-3 w-full bg-ocean hover:bg-ocean-dark text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-charcoal mb-2">Admin Dashboard</h1>
      <p className="text-charcoal-light mb-8">
        Submissions and feedback come through Netlify Forms.
      </p>

      <div className="space-y-6">
        {/* Outline Submissions */}
        <div className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5">
          <h2 className="font-semibold text-charcoal mb-2">Outline Submissions</h2>
          <p className="text-sm text-charcoal-light mb-4">
            New outline submissions from /submit. Review and add the good ones to the codebase.
          </p>
          <a
            href="https://app.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors"
          >
            Open Netlify Forms &rarr;
          </a>
          <p className="text-xs text-charcoal-light/50 mt-3">
            Go to: Your site &rarr; Forms &rarr; <strong>outline-submission</strong>
          </p>
        </div>

        {/* Feedback / Comments */}
        <div className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5">
          <h2 className="font-semibold text-charcoal mb-2">Comments &amp; Edit Suggestions</h2>
          <p className="text-sm text-charcoal-light mb-4">
            Feedback from individual outline pages — comments and suggested edits.
          </p>
          <a
            href="https://app.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors"
          >
            Open Netlify Forms &rarr;
          </a>
          <p className="text-xs text-charcoal-light/50 mt-3">
            Go to: Your site &rarr; Forms &rarr; <strong>outline-feedback</strong>
          </p>
        </div>

        {/* Song Requests */}
        <div className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5">
          <h2 className="font-semibold text-charcoal mb-2">Song Requests</h2>
          <p className="text-sm text-charcoal-light mb-4">
            Songs people want to see outlined, submitted from /requests.
          </p>
          <a
            href="https://app.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ocean hover:bg-ocean-dark text-white text-sm font-semibold py-2 px-5 rounded-full transition-colors"
          >
            Open Netlify Forms &rarr;
          </a>
          <p className="text-xs text-charcoal-light/50 mt-3">
            Go to: Your site &rarr; Forms &rarr; <strong>song-request</strong>
          </p>
        </div>

        {/* How to add content */}
        <div className="bg-sand-pale/50 border border-sand/20 rounded-xl p-5">
          <h2 className="font-semibold text-charcoal mb-2">How to Add New Content</h2>
          <ol className="text-sm text-charcoal-light space-y-1.5 list-decimal list-inside">
            <li>Review submissions in Netlify Forms</li>
            <li>Tell Claude Code to add the outline — provide the song, artist, and outline text</li>
            <li>Claude adds it to <code className="text-xs bg-white/60 px-1 rounded">src/data/outlines.ts</code> and pushes</li>
            <li>Netlify auto-deploys the update</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
