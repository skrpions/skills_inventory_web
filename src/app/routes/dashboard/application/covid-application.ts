import { Inject, Injectable } from '@angular/core';
import { CovidInfrastructure } from '../infrastructure/covid-infrastructure';
import { CovidRepository } from '../domain/repositories/covid-repository';

@Injectable()
export class CovidApplication {
  constructor(@Inject(CovidInfrastructure) private readonly covidRepository: CovidRepository) {}

  getGraph() {
    return this.covidRepository.getGraph();
  }
}
