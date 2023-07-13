import { SharedModule } from '../app/shared/shared.module';
import { TableComponent } from '../app/shared/components/table/table.component';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<TableComponent> = {
  title: 'Skills/Table',
  component: TableComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, SharedModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<TableComponent>;

export const ThreeColumns: Story = {
  args: {
    dataSource: [
      // Este es uno de los Input que aparece en el component Table
      {
        id: 1,
        name: 'user01',
        email: 'user01@example.com',
      },
      {
        id: 2,
        name: 'user02',
        email: 'user03@example.com',
      },
    ],
    metaData: [
      // Este es uno de los Input que aparece en el component Table
      {
        columnDb: 'id',
        customTitleColumn: 'ID',
      },
      {
        columnDb: 'name',
        customTitleColumn: 'NOMBRE',
      },
      {
        columnDb: 'email',
        customTitleColumn: 'CORREO',
      },
    ],
  },
};

export const TwoColumns: Story = {
  args: {
    dataSource: [
      // Este es uno de los Input que aparece en el component Table
      {
        id: 1,
        name: 'user01',
        email: 'user01@example.com',
      },
      {
        id: 2,
        name: 'user02',
        email: 'user03@example.com',
      },
    ],
    metaData: [
      // Este es uno de los Input que aparece en el component Table
      {
        columnDb: 'name',
        customTitleColumn: 'NOMBRE',
      },
      {
        columnDb: 'email',
        customTitleColumn: 'CORREO',
      },
    ],
  },
};
