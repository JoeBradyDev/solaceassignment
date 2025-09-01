import { advocateService } from "@/server/services/services";

export async function GET() {
  const data = await advocateService.getAllAdvocates();

  return Response.json({ data });
}
