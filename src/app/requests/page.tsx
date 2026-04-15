"use client";

import { useState } from "react";
import { songSuggestions } from "@/data/lore";

export default function RequestsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-charcoal mb-2">
        Song Requests
      </h1>
      <p className="text-charcoal-light mb-8">
        Know a song that needs outlining? Add it to the list. The more listevious, the better.
      </p>

      {/* Existing requests */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Requested Songs</h2>
        <div className="space-y-3">
          {songSuggestions.map((s, i) => (
            <div
              key={i}
              className="bg-white/85 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm p-4 flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ocean/10 flex items-center justify-center">
                <span className="text-ocean font-bold text-sm">#{i + 1}</span>
              </div>
              <div>
                <p className="font-semibold text-charcoal">
                  {s.songTitle}{" "}
                  <span className="font-normal text-charcoal-light">by {s.artist}</span>
                </p>
                {s.note && (
                  <p className="text-xs text-charcoal-light mt-1 italic">{s.note}</p>
                )}
                <p className="text-[0.6rem] text-charcoal-light/50 mt-1">
                  Requested by {s.suggestedBy} &middot; {s.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-charcoal-light/40 mt-3 italic">
          More requests will appear here as they&apos;re submitted.
        </p>
      </div>

      {/* Request form */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-md p-5 sm:p-6">
        <h2 className="font-semibold text-charcoal mb-4">Request a Song</h2>

        {submitted ? (
          <div className="text-center py-4">
            <p className="text-charcoal font-medium">Request submitted!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-ocean hover:text-ocean-dark mt-2 transition-colors"
            >
              Request another
            </button>
          </div>
        ) : (
          <form
            name="song-request"
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
            <input type="hidden" name="form-name" value="song-request" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="req-song" className="block text-xs font-medium text-charcoal mb-1">
                Song title
              </label>
              <input
                type="text"
                id="req-song"
                name="song-title"
                required
                placeholder="e.g. American Kids"
                className="w-full px-3 py-2 bg-white/90 border border-ocean/15 rounded-lg text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
              />
            </div>

            <div>
              <label htmlFor="req-artist" className="block text-xs font-medium text-charcoal mb-1">
                Artist
              </label>
              <input
                type="text"
                id="req-artist"
                name="artist"
                required
                placeholder="e.g. Kenny Chesney"
                className="w-full px-3 py-2 bg-white/90 border border-ocean/15 rounded-lg text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
              />
            </div>

            <div>
              <label htmlFor="req-name" className="block text-xs font-medium text-charcoal mb-1">
                Your name <span className="font-normal text-charcoal-light/50">(optional)</span>
              </label>
              <input
                type="text"
                id="req-name"
                name="requester-name"
                placeholder="e.g. DMM"
                className="w-full px-3 py-2 bg-white/90 border border-ocean/15 rounded-lg text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30"
              />
            </div>

            <div>
              <label htmlFor="req-why" className="block text-xs font-medium text-charcoal mb-1">
                Why this song? <span className="font-normal text-charcoal-light/50">(optional)</span>
              </label>
              <textarea
                id="req-why"
                name="reason"
                rows={2}
                placeholder="Seems very listevious..."
                className="w-full px-3 py-2 bg-white/90 border border-ocean/15 rounded-lg text-sm text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-ocean/30 resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-ocean hover:bg-ocean-dark text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
