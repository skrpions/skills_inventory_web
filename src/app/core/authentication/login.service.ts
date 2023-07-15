import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Menu, MenuService, TokenService } from '@core';
import { StorageRepository } from 'app/routes/auth/domain/storage-repository';
import { StorageInfrastructure } from 'app/routes/auth/infrastructure/storage-infrastructure';
import { Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Token, User } from './interface';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    protected http: HttpClient,
    @Inject(StorageInfrastructure) private readonly storageRepository: StorageRepository,
    private tokenService: TokenService,
    private menuService: MenuService
  ) {}

  login(email: string, password: string, recaptcha: string, rememberMe = false): Observable<Token> {
    const auth = {
      correo: email,
      password,
      recaptchaReactive: recaptcha,
    };

    return this.http.post<Token>('https://api-cursoangular.cursos-dev.com/users/login', auth);
  }

  /* login(email: string, password: string, recaptcha: string, rememberMe = false): Observable<Token> {
    return this.http.post<Token>('/auth/login', { email, password, rememberMe });
  } */

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    this.storageRepository.clear(); // TODO: Es debo quitarlo cuando termine la app, ya que lo uso para limpiar los accesTokenTest y RefreshTokenTest
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    const accessToken = this.tokenService.getBearerToken();
    try {
      const decodedToken = jwtDecode(accessToken);
      const user: User = decodedToken as User;

      if (!user.avatar) {
        user.avatar = 'assets/images/dreamcode.jpeg';
      }

      return of(user);
    } catch (error) {
      // Manejo de error en caso de token inválido
      return throwError(new Error('Token inválido'));
    }
  }

  menu(): Observable<Menu[]> {
    return this.http
      .get<{ menu: Menu[] }>('assets/data/menu.json?_t=' + Date.now())
      .pipe(map(response => response.menu));
  }

  //return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
}
