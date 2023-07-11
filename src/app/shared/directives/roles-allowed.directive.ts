import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { AuthApplication } from '../../routes/auth/application/auth.application';
import { StorageApplication } from 'app/routes/auth/application/storage-application';

@Directive({
  selector: '[appRolesAllowed]',
})
export class RolesAllowedDirective implements OnInit {
  @Input('appRolesAllowed') roles = '';

  listRolesAllowed: string[] = [];

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly authApplication: AuthApplication,
    private readonly storageApplication: StorageApplication
  ) {}

  ngOnInit(): void {
    this.listRolesAllowed = this.roles.split(','); // ["MEDIC", "OPERATOR"]
    this.execute();
  }

  execute() {
    const isUserLogged = this.authApplication.isUserLogged;

    const rolesUser = this.storageApplication.getFieldInToken('roles') as string[]; // Obtengo el/los roles del token
    console.log('rolesUser', rolesUser);

    const isUserAuthorized = rolesUser.some(role => this.listRolesAllowed.includes(role));
    console.log('isUserAuthorized', isUserAuthorized);

    // Agrego o elimino elementos del DOM según corresponda
    if (isUserLogged && isUserAuthorized) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
