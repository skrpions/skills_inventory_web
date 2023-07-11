import { Observable } from 'rxjs';
import { GraphEntity } from '../entities/graph-entity';

export interface SocketRepository {
  listen(eventName: string): Observable<GraphEntity[]>;
}
