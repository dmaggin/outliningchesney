"use client";

export function CopyLinkButton() {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
      }}
      className="text-sm text-ocean hover:text-ocean-dark transition-colors font-medium"
    >
      Copy link
    </button>
  );
}
