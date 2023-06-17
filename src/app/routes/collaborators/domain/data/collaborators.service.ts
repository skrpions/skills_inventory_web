import { Injectable } from '@angular/core';
import { CollaboratorEntity } from '../entities/collaborator-entity';

@Injectable({
  providedIn: 'root',
})
export class CollaboratorsService {
  collaborators: CollaboratorEntity[] = [
    {
      id: 0,
      skills: [
        {
          name: 'Angular',
          level: 'Middle',
          experience: 3,
          id: 1,
        },
        {
          name: 'Flutter',
          level: 'Junior',
          experience: 2,
          id: 2,
        },
        {
          name: 'Aws',
          level: 'Junior',
          experience: 2,
          id: 3,
        },
        {
          name: 'Jest',
          level: 'Junior',
          experience: 1,
          id: 4,
        },
      ],
      gender: 'female',
      name: {
        first: 'Jessica',
        last: 'Cala',
      },
      job: {
        position: 'Web Developer',
        salary: '2000 USD',
        dateAdmission: '2016-04-05T21:14:00.710Z',
        status: 'active',
      },
      location: {
        street: {
          name: 'Meléndez',
          number: 8733,
        },
        city: 'Cali',
        state: 'Valle del Cauca',
        country: 'Colombia',
        postcode: 8685,
      },
      email: 'jessica.cala@dreamcodesoft.com',
      login: {
        username: 'tinytiger464',
        password: 'XXXX',
      },
      dob: {
        date: '1984-07-12T05:08:21.943Z',
        age: 36,
      },
      registered: {
        date: '2020-04-05T21:14:00.710Z',
        age: 3,
      },
      phone: '059-41502283',
      cell: '0989-777-2080',
      document: {
        type: 'pp',
        number: '1060455484',
      },
      /* social: {
        linkedin: 'http://linkedin.com/in/jessica-cala-0b8b8b1',
      }, */
      picture: {
        large: 'https://randomuser.me/api/portraits/women/29.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/29.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/29.jpg',
      },
    },
    {
      id: 1,
      skills: [
        {
          name: 'Angular',
          level: 'Middle',
          experience: 4,
          id: 1,
        },
        {
          name: 'Typescript',
          level: 'Middle',
          experience: 4,
          id: 2,
        },
        {
          name: 'Aws',
          level: 'Junior',
          experience: 1,
          id: 3,
        },
        {
          name: 'Jest',
          level: 'Junior',
          experience: 1,
          id: 4,
        },
      ],
      gender: 'male',
      name: {
        first: 'Nestor',
        last: 'Martínez',
      },
      job: {
        position: 'Frontend Developer',
        salary: '2000 USD',
        dateAdmission: '2016-04-05T21:14:00.710Z',
        status: 'active',
      },
      location: {
        street: {
          number: 2540,
          name: 'San Joaquín',
        },
        city: 'El Tambo',
        state: 'Cauca',
        country: 'Colombia',
        postcode: 39702,
      },
      email: 'nestor.martinez@dreamcodesoft.com',
      login: {
        username: 'skrpions14',
        password: 'weasel',
      },
      dob: {
        date: '1995-04-16T14:33:32.425Z',
        age: 76,
      },
      registered: {
        date: '2017-10-29T10:18:18.618Z',
        age: 5,
      },
      phone: '3105338818',
      cell: '3128456759',
      document: {
        type: 'cc',
        number: '1061779667',
      },
      /*  social: {
        linkedin: 'https://www.linkedin.com/in/nestor-martínez-c-751232209/',
      }, */
      picture: {
        large: 'https://randomuser.me/api/portraits/men/86.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/86.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/med/men/86.jpg',
      },
    },
    {
      id: 2,
      skills: [
        {
          name: 'React',
          level: 'Middle',
          experience: 3,
          id: 1,
        },
        {
          name: 'Angular',
          level: 'Junior',
          experience: 1,
          id: 2,
        },
        {
          name: 'Typescript',
          level: 'Junior',
          experience: 1,
          id: 3,
        },
        {
          name: 'Css',
          level: 'Junior',
          experience: 1,
          id: 4,
        },
      ],
      gender: 'male',
      name: {
        first: 'Juan',
        last: 'Naranjo',
      },
      job: {
        position: 'UX/UI Developer',
        salary: '2000 USD',
        dateAdmission: '2016-04-05T21:14:00.710Z',
        status: 'active',
      },
      location: {
        street: {
          number: 2540,
          name: 'The Grove',
        },
        city: 'Cali',
        state: 'Valle del Cauca',
        country: 'Colombia',
        postcode: 39702,
      },
      email: 'juan.naranjo@dreamcodesoft.com',
      login: {
        username: 'juan26',
        password: 'weasel',
      },
      dob: {
        date: '1994-08-16T14:33:32.425Z',
        age: 76,
      },
      registered: {
        date: '2017-10-29T10:18:18.618Z',
        age: 5,
      },
      phone: '041-296-6345',
      cell: '081-034-8468',
      document: {
        type: 'cc',
        number: '1855036T',
      },
      /* social: {
        linkedin: 'https://www.linkedin.com/in/juan-naranjo-c-751232209/',
      }, */
      picture: {
        large: 'https://randomuser.me/api/portraits/men/6.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/6.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
      },
    },
    {
      id: 3,
      skills: [
        {
          name: 'Python',
          level: 'Senior',
          experience: 6,
          id: 1,
        },
        {
          name: 'Django',
          level: 'Middle',
          experience: 4,
          id: 2,
        },
        {
          name: 'Typescript',
          level: 'Junior',
          experience: 2,
          id: 3,
        },
        {
          name: 'Aws',
          level: 'Junior',
          experience: 2,
          id: 4,
        },
      ],
      gender: 'male',
      name: {
        first: 'Victor',
        last: 'Tilve',
      },
      job: {
        position: 'Backend Developer',
        salary: '2000 USD',
        dateAdmission: '2016-04-05T21:14:00.710Z',
        status: 'active',
      },
      location: {
        street: {
          number: 3803,
          name: 'Queen St',
        },
        city: 'Cartagena',
        state: 'Bolívar',
        country: 'Colombia',
        postcode: 45646,
      },
      email: 'victor.tilve@dreamcodesoft.com',
      login: {
        username: 'victor253',
        password: '111111',
      },
      dob: {
        date: '1992-03-02T09:32:36.999Z',
        age: 30,
      },
      registered: {
        date: '2002-04-22T02:09:19.391Z',
        age: 21,
      },
      phone: 'Q19 L06-1250',
      cell: 'Y49 N42-7931',
      document: {
        type: 'ce',
        number: '523279321',
      },
      /*  social: {
        linkedin: 'https://www.linkedin.com/in/victor-tilve-c-751232209/',
      }, */
      picture: {
        large: 'https://randomuser.me/api/portraits/men/38.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg',
      },
    },
  ];
}
