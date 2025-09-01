import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { count } from "drizzle-orm";

import { advocates } from "@/server/db/schema";
import { AdvocateModel } from "./schema";

const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient);

export class AdvocateRepository {
  async findAll(page: number, limit: number): Promise<AdvocateModel[]> {
    const offset = (page - 1) * limit;

    return db.select().from(advocates).limit(limit).offset(offset);
  }

  async countAll(): Promise<number> {
    const result = await db
      .select({ value: count(advocates.id) })
      .from(advocates);

    return Number(result[0]?.value ?? 0);
  }
}
