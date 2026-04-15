import type { Metadata } from "next";
import { LiveComments } from "@/components/LiveComments";

export const metadata: Metadata = {
  title: "Comments & Feedback",
  description: "What people are saying about these outlines.",
};

export default function CommentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-display font-bold text-charcoal mb-2">
        Comments &amp; Feedback
      </h1>
      <p className="text-charcoal-light mb-8">
        What people are saying about these outlines. Very listevious discourse.
      </p>

      <LiveComments />
    </div>
  );
}
