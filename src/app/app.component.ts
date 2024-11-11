import {ChangeDetectionStrategy, Component, input, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {Profile} from './model/model';
import {JsonPipe} from '@angular/common';
import {delay, of} from 'rxjs';
import {profile} from './model/data';
import {DeepReadonly} from './utils/utilityTypes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'signals-demo';

  profile: WritableSignal<DeepReadonly<Profile>> = signal({
    person: {
      name: undefined,
      age: undefined,
      addressLine1: undefined,
      city: undefined,
      country: undefined,
      friends: [],
      enemies: [],
    },
    createdAt: undefined,
    bio: undefined,
    title: undefined
  })

  constructor() {
    // of(profile).pipe(delay(2000)).subscribe((profile) => {
    //   this.profile = profile;
    // })
  }

  profileChanged($event: DeepReadonly<Profile>) {
    this.profile.set($event);
  }
}
