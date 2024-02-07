import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LeadModel} from "../../../state/lead/models/lead-model";
import {LeadService} from "../../../core/services/lead.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/lead/reducers/lead.reducer";
import {BusinessResponseObject} from "../../../core/models/business-rqobject";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class FormLeadComponent
 * @description Componente responsável pela criação de leads.
 * Utiliza o formulário reativo para captura de dados e o NgRx para gerenciamento de estado.
 * @date 31/01/2024
 */
@Component({
  selector: 'app-form-lead',
  templateUrl: './form-lead.component.html',
  styleUrls: ['./form-lead.component.sass']
})
export class FormLeadComponent implements OnInit {
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private leadService: LeadService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  public onSubmit(): void {
    const formData: LeadModel = new LeadModel(this.form.value);
    if (this.form.valid) {
      this.leadService.create(formData).subscribe({
        next: (result: BusinessResponseObject<LeadModel>): void => {
          if (result && result.success) {
            this.form.reset();
          }
        },
        error: (error) => {
          console.error('Erro ao cadastrar lead: ', error);
        }
      });
    }
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      syndicate: ['', Validators.required],
      status: [''],
      phone: ['', Validators.required],
      description: ['']
    });
  }
}
