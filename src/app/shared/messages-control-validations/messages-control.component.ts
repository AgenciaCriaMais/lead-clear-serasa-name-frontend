import { Component, HostBinding, Input } from '@angular/core';
import {AbstractControl, FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from '@angular/forms';
import { MessagesValidationService } from './messages-validation-service';

/**
 * (Messages Control Validations)
 *
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @class ControlMessagesComponent
 * @description Component p/ mostrar mensagens nos inputs
 * @date 02/01/2024
 */
@Component({
  selector: 'messages-control-validations',
  template: ` <ng-template [ngIf]="errorMessage !== null">{{ errorMessage }}</ng-template> `,
})
export class MessagesControlComponent {
  @Input() control!: FormControl | AbstractControl | null;
  @HostBinding('class') defaultClass = 'help-block help-block-error';

  constructor() {}

  get errorMessage() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return MessagesValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }
}
