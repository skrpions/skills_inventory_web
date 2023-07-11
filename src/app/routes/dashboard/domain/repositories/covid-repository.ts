import { Observable } from 'rxjs';
import { ExternalEntity } from '../entities/external-entity';

export interface CovidRepository {
  getGraph(): Observable<ExternalEntity[]>;
}
