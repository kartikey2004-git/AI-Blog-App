import Groq from "groq-sdk";

function buildPrompt({ topic, outline }) {
  const lines = [];

  lines.push(`Write a clear, engaging blog post in Markdown.`);

  if (topic) lines.push(`Topic: ${topic}`);
  if (outline) lines.push(`Outline: ${outline}`);

  lines.push(`Use headings, short paragraphs, and bullet points where helpful.`);
  
  lines.push(`Return only the blog content (no extra commentary).`);

  return lines.join("\n");
}


export async function generateBlogDraft({ topic = "", outline = "" }) {
  const apiKey = process.env.GROQ_API_KEY;   
  const model = process.env.GROQ_AI_MODEL || "llama3-70b-8192";

  const prompt = buildPrompt({ topic, outline });

  // Mock response if no key
  if (!apiKey) {
    return `# ${topic || "Untitled Draft"}\n\n*This is a mocked AI draft.*\n\n## Introduction\n\nWrite a friendly intro that hooks the reader.\n\n## Main Points\n\n- Key idea one\n- Key idea two\n- Key idea three\n\n## Conclusion\n\nWrap up with a takeaway and a call-to-action.`;
  }

  try {
    const groq = new Groq({ apiKey });

    const response = await groq.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response?.choices?.[0]?.message?.content?.trim();
    return text || "AI draft could not be generated.";
  } catch (error) {
    console.error("Groq request failed:", error);
    return "AI draft generation failed.";
  }
}
