import {Maybe} from '../utils/utilityTypes';

export interface Profile {
  person: Person;
  createdAt: Maybe<string>;
  bio: Maybe<string>;
  title: Maybe<string>;
}


export interface Person {
  name: Maybe<string>;
  age: Maybe<number>;
  addressLine1: Maybe<string>;
  city: Maybe<string>;
  country: Maybe<string>;
  friends: Person[];
  enemies: Person[];
}



