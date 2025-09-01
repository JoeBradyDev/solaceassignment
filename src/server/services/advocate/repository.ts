import db from "@/server/db";
import { advocates } from "@/server/db/schema";
import { AdvocateModel } from "./schema";

export class AdvocateRepository {
  async findAll(): Promise<AdvocateModel[]> {
    return db.select().from(advocates);
  }
}
