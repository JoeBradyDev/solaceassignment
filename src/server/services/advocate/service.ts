import { AdvocateRepository } from "./repository";
import { AdvocateModel } from "./schema";

export class AdvocateService {
  constructor(private readonly advocateRepository: AdvocateRepository) {}

  async getAllAdvocates(): Promise<AdvocateModel[]> {
    return await this.advocateRepository.findAll();
  }
}
