import db from "@/server/db";
import { advocates } from "@/server/db/schema";

export async function GET() {
  const data = await db.select().from(advocates);

  return Response.json({ data });
}
