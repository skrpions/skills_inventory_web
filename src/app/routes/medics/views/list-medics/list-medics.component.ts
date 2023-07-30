import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  BaseHeaderComponent,
  ExportOptions,
  Messages,
  Modal,
} from '@shared/classes/base_component';
import { MetaData } from '@shared/models/meta-data';
import { UtilsService } from '@shared/services/utils.service';
import { ToastrService } from 'ngx-toastr';
import { MedicApplication } from '../../application/medic-application';
import { Medic } from '../../domain/medic';
import { FormMedicComponent } from '../form-medic/form-medic.component';
import { MedicRepository } from '../../domain/medic-repository';

@Component({
  selector: 'app-medics-views-list-medics',
  templateUrl: './list-medics.component.html',
  styleUrls: ['./list-medics.component.scss'],
})
export class ListMedicsComponent extends BaseHeaderComponent<Medic, MedicRepository> {
  icon_header = 'group_add';
  title_header = 'titles.medics';
  modal: Modal = {
    component: FormMedicComponent,
    width: '800px',
  };
  messages: Messages = {
    confirm: 'status_messages.confirmation_question',
    insert: 'status_messages.added',
    update: 'status_messages.updated',
    delete: 'status_messages.deleted',
  };
  // Está metadata es para visualizar todas las columnas en la web
  metaData: MetaData[] = [
    { columnDb: 'id', customTitleColumn: 'ID' },
    { columnDb: 'nombre', customTitleColumn: 'PRIMER NOMBRE' },
    { columnDb: 'apellido', customTitleColumn: 'PRIMER APELLIDO' },
    { columnDb: 'correo', customTitleColumn: 'CORREO' },
    { columnDb: 'dni', customTitleColumn: 'DNI' },
    { columnDb: 'foto', customTitleColumn: 'FOTO' },
  ];

  // Está metadata es para exportar solamente las columnas necesarias
  metaDataExport: MetaData[] = [
    { columnDb: 'id', customTitleColumn: 'ID' },
    { columnDb: 'nombre', customTitleColumn: 'PRIMER NOMBRE' },
    { columnDb: 'segundo_nombre', customTitleColumn: 'SEGUNDO NOMBRE' },
    { columnDb: 'apellido', customTitleColumn: 'PRIMER APELLIDO' },
    { columnDb: 'cmp', customTitleColumn: 'CMP' },
    { columnDb: 'foto', customTitleColumn: 'FOTO' },
  ];
  exportOptions: ExportOptions = {
    fileName: 'medics',
    sheetName: 'medics',
  };

  constructor(
    protected readonly medicApplication: MedicApplication,
    protected readonly utilsSvc: UtilsService,
    protected toast: ToastrService,
    protected translate: TranslateService
  ) {
    super(medicApplication, utilsSvc, toast, translate);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();

    if (this.filterValue === '') {
      const objectPaginationWithCurrentPage = {
        previousPageIndex: 0,
        pageIndex: 0,
        pageSize: this.page_size,
        length: this.dataSource.length,
      };
      this.changePage(objectPaginationWithCurrentPage);
    } else {
      this.dataSource = this.dataSourceClone.filter((medic: Medic) =>
        medic?.nombre.toLowerCase().includes(this.filterValue)
      );
      this.totalRecords = this.dataSource.length;
    }
  }

  /*  openForm(row: Medic = null!) {
    console.log('row', row);
    const reference = this.utilsSvc.openForm(this.modal.component, this.modal.width, row);

    reference.subscribe(response => {
      if (!response) return;

      const id = response.id;

      if (id) {
        // Update entity
        this.application.update(id, response.data).subscribe({
          next: () => {
            this.toast.success(this.translate.instant(this.messages.update));
          },
        });
      } else {
        // New entity
        this.application.insert(response.data).subscribe({
          next: () => {
            this.toast.success(this.translate.instant(this.messages.insert));
          },
        });
      }
    });
  } */
}
