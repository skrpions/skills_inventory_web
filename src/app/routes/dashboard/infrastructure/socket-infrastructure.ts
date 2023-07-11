import { Injectable } from '@angular/core';
import { SocketRepository } from '../domain/repositories/socket-repository';
import { Observable, Observer } from 'rxjs';
import { GraphEntity } from '../domain/entities/graph-entity';
//import * as io from 'socket.io-client';

@Injectable()
export class SocketInfrastructure implements SocketRepository {
  //private socket: io.Socket;

  constructor() {
    //this.socket = io('https://p7inv.sse.codesandbox.io/');
  }

  listen(eventName: string): any {
    /* return new Observable ((observer: Observer<GraphEntity[]>) => {
      this.socket.on(eventName, (data: GraphEntity[]) => {
        observer.next(data);
      });
    }) */
  }
}
