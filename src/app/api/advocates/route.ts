import { advocateService } from "@/server/services/services";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const result = await advocateService.getAllAdvocates({ page, limit });

  return Response.json(result);
}
