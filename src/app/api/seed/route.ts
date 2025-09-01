import db from "@/server/db";
import { advocates } from "@/server/db/schema";
import { advocateData } from "@/server/db/seed/advocates";

export async function POST() {
  const records = await db.insert(advocates).values(advocateData).returning();

  return Response.json({ advocates: records });
}
