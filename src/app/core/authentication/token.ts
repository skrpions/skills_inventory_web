import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { base64, capitalize, currentTimestamp, timeLeft } from './helpers';
import { Token, User } from './interface';

export abstract class BaseToken {
  //private auth = inject(AuthService);
  user!: User;

  constructor(protected attributes: Token) {}

  get access_token(): string {
    //console.log('✅', this.attributes.accessToken);
    //this.exp();
    return this.attributes.accessToken;
  }

  get refresh_token(): string | void {
    console.log('👌', this.attributes.refreshToken);
    return this.attributes.refreshToken;
  }

  get token_type(): string {
    console.log('✅', this.attributes.token_type);
    return this.attributes.token_type ?? 'bearer';
  }

  // Si la fecha de expiracion está dentro del accessToken usar esta forma
  get exp(): number | void {
    //this.auth.user().subscribe(user => (this.attributes.exp = user.exp));
    console.log('❌ this.attributes.exp', this.attributes.exp);
    return this.attributes.exp;
  }

  // Si la fecha de expiracion está en el mismo nivel del accessToken, RefreshToken usar esta forma
  /* get exp(): number | void {
    return this.attributes.exp;
  } */

  valid(): boolean {
    return this.hasAccessToken() && !this.isExpired();
  }

  getBearerToken(): string {
    return this.access_token
      ? [capitalize(this.token_type), this.access_token].join(' ').trim()
      : '';
  }

  needRefresh(): boolean {
    /* console.log('this.exp ', this.exp);
    const timestamp: any = this.exp;
    const date: any = new Date(timestamp * 1000); // Multiplicamos por 1000 ya que JavaScript utiliza milisegundos en lugar de segundos para los timestamps

  // Formatear la fecha en un formato legible
  const fechaHoraLegible = date.toLocaleString(); // Usamos toLocaleString() para obtener la representación de fecha y hora local
  console.log(fechaHoraLegible);
 */
    return this.exp !== undefined && this.exp >= 0;
  }

  getRefreshTime(): number {
    return timeLeft((this.exp ?? 0) - 5);
  }

  private hasAccessToken(): boolean {
    return !!this.access_token;
  }

  private isExpired(): boolean {
    return this.exp !== undefined && this.exp - currentTimestamp() <= 0;
  }
}

export class SimpleToken extends BaseToken {}

export class JwtToken extends SimpleToken {
  private _payload?: { exp?: number | void };

  static is(accessToken: string): boolean {
    try {
      const [_header] = accessToken.split('.');
      const header = JSON.parse(base64.decode(_header));

      return header.typ.toUpperCase().includes('JWT');
    } catch (e) {
      return false;
    }
  }

  get exp(): number | void {
    return this.payload?.exp;
  }

  private get payload(): { exp?: number | void } {
    if (!this.access_token) {
      return {};
    }

    if (this._payload) {
      return this._payload;
    }

    const [, payload] = this.access_token.split('.');
    const data = JSON.parse(base64.decode(payload));
    if (!data.exp) {
      data.exp = this.attributes.exp;
    }

    return (this._payload = data);
  }
}
