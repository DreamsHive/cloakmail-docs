import { getLLMText, source } from "@/lib/source";

export const runtime = "edge";

export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}
