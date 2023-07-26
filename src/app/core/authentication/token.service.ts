import { Injectable, OnDestroy } from '@angular/core';
import { LocalStorageService } from '@shared';
import { BehaviorSubject, Observable, Subject, Subscription, timer } from 'rxjs';
import { share } from 'rxjs/operators';
import { currentTimestamp, filterObject } from './helpers';
import { Token } from './interface';
import { BaseToken } from './token';
import { TokenFactory } from './token-factory.service';
import jwtDecode from 'jwt-decode';
import { ITokens } from 'app/routes/auth/domain/token.interface';
import { Router } from '@angular/router';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class TokenService implements OnDestroy {
  private key = 'accessToken';

  private change$ = new BehaviorSubject<BaseToken | undefined>(undefined);
  private refresh$ = new Subject<BaseToken | undefined>();
  private timer$?: Subscription;

  private _token?: BaseToken;

  constructor(
    private store: LocalStorageService,
    private factory: TokenFactory,
    private router: Router
  ) {}

  private get token(): BaseToken | undefined {
    if (!this._token) {
      this._token = this.factory.create(this.store.get(this.key));
    }

    return this._token;
  }

  change(): Observable<BaseToken | undefined> {
    return this.change$.pipe(share());
  }

  refresh(): Observable<BaseToken | undefined> {
    this.buildRefresh();

    return this.refresh$.pipe(share());
  }

  set(token?: Token): TokenService {
    this.save(token);

    return this;
  }

  clear(): void {
    this.save();
  }

  valid(): boolean {
    return this.token?.valid() ?? false;
  }

  getBearerToken(): string {
    return this.token?.getBearerToken() ?? '';
  }

  getRefreshToken(): string | void {
    //console.log('✅ this.token?.refresh_token: ', this.token?.refresh_token);
    return this.token?.refresh_token;
  }

  ngOnDestroy(): void {
    this.clearRefresh();
  }

  private save(token?: Token): void {
    // Decodificar el token para obtener el expire_In
    const accessToken: any = token?.accessToken;
    const payload: any = jwtDecode(accessToken);
    console.log('Skrpion payload', payload);

    //const refreshTokenExpiresIn = 86400;

    this._token = undefined;

    if (!token) {
      this.store.remove(this.key);
      console.log('saliendo...');
      this.router.navigate(['/auth/login']);
    } else {
      const expiresIn = 1000;
      const value = Object.assign({ access_token: '', token_type: 'Bearer' }, token, {
        exp: expiresIn ? currentTimestamp() + expiresIn : null,
      });
      this.store.set(this.key, filterObject(value));

      /* const value = Object.assign({ access_token: '', token_type: 'Bearer' }, token, {
        exp: token.expires_in ? currentTimestamp() + token.expires_in : null,
      });
      this.store.set(this.key, filterObject(value)); */
    }

    this.change$.next(this.token);
    this.buildRefresh();
  }

  private buildRefresh() {
    this.clearRefresh();

    if (this.token?.needRefresh()) {
      this.timer$ = timer(10 * 1000).subscribe(() => {
        this.refresh$.next(this.token);
      });
    }
    /* if (this.token?.needRefresh()) {
      this.timer$ = timer(this.token.getRefreshTime() * 1000).subscribe(() => {
        this.refresh$.next(this.token);
      });
    } */
  }

  private clearRefresh() {
    if (this.timer$ && !this.timer$.closed) {
      this.timer$.unsubscribe();
    }
  }
}
