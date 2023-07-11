import { Inject, Injectable } from '@angular/core';
import { SocketRepository } from '../domain/repositories/socket-repository';
import { SocketInfrastructure } from '../infrastructure/socket-infrastructure';
import { GraphEntity } from '../domain/entities/graph-entity';
import { Observable } from 'rxjs';

@Injectable()
export class SocketApplication {
  constructor(@Inject(SocketInfrastructure) private readonly socketRepository: SocketRepository) {}

  listen(eventName: string): Observable<GraphEntity[]> {
    return this.socketRepository.listen(eventName);
  }
}
