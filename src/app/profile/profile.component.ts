import {
  ChangeDetectionStrategy,
  Component,model,
} from '@angular/core';
import {PersonComponent} from '../person/person.component';
import {Profile} from '../model/model';
import {FormsModule} from '@angular/forms';
import {AsyncPipe, NgIf} from '@angular/common';
import {DeepReadonly} from '../utils/utilityTypes';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PersonComponent,
    FormsModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

  profile = model.required<DeepReadonly<Profile>>();

  updateCreateAt($event: any) {
    this.profile.update((profile) => {
      return {...profile, createdAt: $event}
    })
  }

  personChanged($event: any) {
    this.profile.update((profile) => {
      return {...profile, person: $event}
    })
  }
}
