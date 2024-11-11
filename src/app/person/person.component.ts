import {ChangeDetectionStrategy, Component, Input, model} from '@angular/core';
import {Person} from '../model/model';
import {FormsModule} from '@angular/forms';
import {DeepReadonly, nestedTemplateFormsViewProviders} from '../utils/utilityTypes';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
  viewProviders: [nestedTemplateFormsViewProviders],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {

   person = model<DeepReadonly<Person>>( {
    name: undefined,
    age: undefined,
    addressLine1: undefined,
    city: undefined,
    country: undefined,
    friends: [],
    enemies: [],
  });

  addFriend() {

    const friend = {
      name: undefined,
      age: undefined,
      addressLine1: undefined,
      city: undefined,
      country: undefined,
      friends: [],
      enemies: [],
    }

    this.person.update((person) => {
      return {...person, friends: [...person.friends, friend]}
    });

  }

  addEnemy() {
    const friend = {
      name: undefined,
      age: undefined,
      addressLine1: undefined,
      city: undefined,
      country: undefined,
      friends: [],
      enemies: [],
    }

    this.person.update((person) => {
      return {...person, enemies: [...person.enemies, friend]}
    });
  }

  modelChanged(param: Partial<Person>) {
    this.person.update((person) => {
      return {...person, ...param}
    });
  }

  friendChanged($event: DeepReadonly<Person>, idx: number) {
    this.person.update((person) => {
      return {...person, friends: person.friends.map((friend, i) => i === idx ? $event : friend)}
    });
  }

  enemyChanged($event: DeepReadonly<Person>, idx: number) {
    this.person.update((person) => {
      return {...person, enemies: person.enemies.map((friend, i) => i === idx ? $event : friend)}
    });
  }
}
