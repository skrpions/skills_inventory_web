export interface User {
  [prop: string]: any;

  id?: number | string | null;
  name?: string;
  email?: string;
  avatar?: string;
  roles?: any[];
  permissions?: any[];
  iat?: number;
  exp?: number;
}

interface TokenEssentials {
  accessToken: string; // Obligatorio del curso
  refreshToken: string; // Obligatorio del curso
}

interface TokenOptionals {
  token_type: string;
  expires_in: number;
  exp: number;
}

/* interface TokenEssentials {
  [prop: string]: any;
  access_token: string;
} */
/* interface TokenOptionals {
  token_type: string;
  expires_in: number;
  exp: number;
  refresh_token: string;

} */

export type Token = Required<TokenEssentials> & Partial<TokenOptionals>;
