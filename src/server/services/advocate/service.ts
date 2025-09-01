import { AdvocateRepository } from "./repository";
import { AdvocateModel } from "./schema";

export class AdvocateService {
  constructor(private readonly advocateRepository: AdvocateRepository) {}

  async getAllAdvocates({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<{
    data: AdvocateModel[];
    total: number;
    totalPages: number;
    page: number;
    limit: number;
  }> {
    const [data, total] = await Promise.all([
      this.advocateRepository.findAll(page, limit),
      this.advocateRepository.countAll(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      total,
      totalPages,
      page,
      limit,
    };
  }
}
