import { SkillEntity } from 'app/routes/skills/domain/entities/skill-entity';

interface Collaborator {
  id: number;
  skills: SkillEntity[];
  gender: string;
  name: Name;
  job: Job;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  document: Document;
  picture: Picture;
}

interface Name {
  first: string;
  last: string;
}
interface Job {
  position: string;
  salary: string;
  dateAdmission: string;
  status: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
}

interface Street {
  number: number;
  name: string;
}

interface Login {
  username: string;
  password: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}
interface Social {
  linkedin: string;
}

interface Document {
  type: string;
  number: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export type CollaboratorEntity = Collaborator;
