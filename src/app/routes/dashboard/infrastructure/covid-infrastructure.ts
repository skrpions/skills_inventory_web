import { Injectable } from '@angular/core';
import { CovidRepository } from '../domain/repositories/covid-repository';
import { GraphEntity } from '../domain/entities/graph-entity';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExternalEntity } from '../domain/entities/external-entity';

@Injectable()
export class CovidInfrastructure implements CovidRepository {
  mockGraph(): ExternalEntity[] {
    return [
      {
        country: 'Colombia',
        confirmed: 100,
      },
      {
        country: 'Mexico',
        confirmed: 200,
      },
      {
        country: 'USA',
        confirmed: 300,
      },
    ];
  }

  constructor(private readonly http: HttpClient) {}
  getGraph(): Observable<ExternalEntity[]> {
    return of(this.mockGraph());
  }
}
