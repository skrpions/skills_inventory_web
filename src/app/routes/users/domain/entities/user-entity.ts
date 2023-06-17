export interface UserRequired {
  nombre: string;
  correo: string;
  password: string;
  roles: any;
}

export interface UserOptional {
  id: number;
  activo: boolean;
}

export type UserProperties = UserRequired & Partial<UserOptional>;

export type UserUpdate = {
  nombre: string;
  correo: string;
  password: string;
  roles: any;
};

export class UserEntity {
  private readonly id!: number;
  private nombre!: string;
  private correo!: string;
  private password!: string;
  private activo: boolean;
  private roles: any;

  constructor(properties: UserProperties) {
    Object.assign(this, properties);
    this.activo = true;
  }

  properties(): UserProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
      activo: this.activo,
      roles: this.roles,
    };
  }

  update(properties: UserUpdate): void {
    Object.assign(this, properties);
  }

  delete(): void {
    this.activo = false;
  }
}
