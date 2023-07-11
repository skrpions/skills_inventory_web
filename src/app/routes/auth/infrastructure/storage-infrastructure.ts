import { Injectable } from '@angular/core';
import { StorageRepository } from '../domain/storage-repository';
import jwtDecode from 'jwt-decode';

@Injectable()
export class StorageInfrastructure implements StorageRepository {
  setStorage(propertyName: string, value: string): void {
    localStorage.setItem(propertyName, value);
  }
  getStorage(propertyName: string): string | null {
    return localStorage.getItem(propertyName);
  }
  clear(): void {
    localStorage.clear();
  }

  getFieldInToken(field: string): string | string[] {
    const accessToken = localStorage.getItem('accessToken-test');
    const payload: any = jwtDecode(accessToken!);
    return payload[field];
  }
}
