import {ControlContainer, NgForm, NgModelGroup} from '@angular/forms';
import {Optional} from '@angular/core';


export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type Maybe<T> = T | null | undefined;


export const nestedTemplateFormsViewProviders = {
  provide: ControlContainer,
  useFactory: _formViewProviderFactory,
  deps: [ [new Optional(), NgForm], [new Optional(), NgModelGroup]],

}

export function _formViewProviderFactory(
  ngForm: NgForm, ngModelGroup: NgModelGroup
) {
  return ngModelGroup || ngForm || null;
}

