import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const token = Netlify.env.get("NETLIFY_API_TOKEN");
  const siteId = Netlify.env.get("SITE_ID");

  if (!token || !siteId) {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // First get the form ID for "outline-feedback"
    const formsRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!formsRes.ok) {
      return new Response(JSON.stringify([]), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const forms = await formsRes.json();
    const feedbackForm = forms.find((f: { name: string }) => f.name === "outline-feedback");

    if (!feedbackForm) {
      return new Response(JSON.stringify([]), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch submissions
    const subsRes = await fetch(
      `https://api.netlify.com/api/v1/forms/${feedbackForm.id}/submissions?per_page=100`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!subsRes.ok) {
      return new Response(JSON.stringify([]), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const submissions = await subsRes.json();

    // Return only the fields we need
    const cleaned = submissions.map((s: { id: string; created_at: string; data: Record<string, string> }) => ({
      id: s.id,
      created_at: s.created_at,
      data: {
        "outline-slug": s.data["outline-slug"] || "",
        "song-title": s.data["song-title"] || "",
        "feedback-type": s.data["feedback-type"] || "",
        name: s.data["name"] || "",
        content: s.data["content"] || "",
      },
    }));

    return new Response(JSON.stringify(cleaned), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=30",
      },
    });
  } catch {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
