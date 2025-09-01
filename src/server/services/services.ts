import { AdvocateRepository } from "./advocate/repository";
import { AdvocateService } from "./advocate/service";

export const advocateRepository = new AdvocateRepository();

export const advocateService = new AdvocateService(advocateRepository);
