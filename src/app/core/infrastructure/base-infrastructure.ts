import { TokenService } from '@core/authentication';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResultPage } from '@core/domain/base-methods-interface';
import { environment } from '@env/environment';
import { StorageApplication } from 'app/routes/auth/application/storage-application';
import { CollaboratorsService } from 'app/routes/collaborators/domain/data/collaborators.service';
import { Observable, of } from 'rxjs';

export abstract class BaseInfrastructure<Entity> {

  private collaboratorSrv = inject(CollaboratorsService);

  //private tokenSrv = inject(TokenService);
  //private access: string = this.tokenSrv.getBearerToken(); // Incluye: Bearer + token

  constructor(
    private readonly http: HttpClient,
    private readonly storageApplication: StorageApplication,
    private readonly endPoint: string
  ) {}

  list(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiPath}/${this.endPoint}`);
  }

  listRandomUsers(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiPathRandomUser}/${this.endPoint}`);
  }

  listOne(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  insert(entity: Partial<Entity>): Observable<Entity> {
    return this.http.post<Entity>(`${environment.apiPath}/${this.endPoint}`, entity);
  }

  update(id: number, entity: Partial<Entity>): Observable<Entity> {
    return this.http.put<Entity>(`${environment.apiPath}/${this.endPoint}/${id}`, entity);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Entity>(`${environment.apiPath}/${this.endPoint}/${id}`);
  }

  page(pageIndex: number, pageSize: number): Observable<ResultPage<Entity>> {
    return this.http.get<ResultPage<Entity>>(
      `${environment.apiPath}/${this.endPoint}/page/${pageIndex}/${pageSize}`
    );
  }

  /* list(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiPath}/${this.endPoint}`, {
      headers: { authorization: this.access },
    });
  }

  listRandomUsers(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiPathRandomUser}/${this.endPoint}`);
  }

  listOne(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }

  insert(entity: Partial<Entity>): Observable<Entity> {
    return this.http.post<Entity>(`${environment.apiPath}/${this.endPoint}`, entity, {
      headers: { authorization: this.access },
    });
  }

  update(id: number, entity: Partial<Entity>): Observable<Entity> {
    return this.http.put<Entity>(`${environment.apiPath}/${this.endPoint}/${id}`, entity, {
      headers: { authorization: this.access },
    });
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Entity>(`${environment.apiPath}/${this.endPoint}/${id}`, {
      headers: { authorization: this.access },
    });
  } */

  /* page(pageIndex: number, pageSize: number): Observable<ResultPage<Entity>> {
    return this.http.get<ResultPage<Entity>>(
      `${environment.apiPath}/${this.endPoint}/page/${pageIndex}/${pageSize}`,
      { headers: { authorization: 'Bearer ' + this.accessToken } }
    );
  } */

  /* Fake */
  listFake(): Observable<any[]> {
    return of(this.collaboratorSrv.collaborators);
  }

  insertFake(entity: any): Observable<any> {
    return of(this.collaboratorSrv.collaborators.push(entity));
  }

  updateFake(id: number, entity: any): Observable<any> {
    return of((this.collaboratorSrv.collaborators[id] = entity));
  }
}
