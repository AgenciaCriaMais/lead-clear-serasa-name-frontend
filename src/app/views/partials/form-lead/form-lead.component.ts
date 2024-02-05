import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LeadModel} from "../../../state/lead/models/lead-model";
import {LeadService} from "../../../core/services/lead.service";
import {Store} from "@ngrx/store";
import {loadLeads} from "../../../state/lead/actions/lead.actions";
import {AppState} from "../../../state/lead/reducers/lead.reducer";
import {Observable} from "rxjs";
import {selectAllLeads} from "../../../state/lead/selectors/lead.selectors";
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
  public debugging = false; // Flag para habilitar ou desabilitar o modo de depuração.
  public leads$: Observable<LeadModel[]>;


  constructor(private formBuilder: FormBuilder,
              private leadService: LeadService,
              private store: Store<AppState>) {
    this.leads$ = this.store.select(selectAllLeads);
  }

  ngOnInit(): void {
    this.createForm();
    this.store.dispatch(loadLeads()); // Ação para carregar os leads.
  }

  public onSubmit(): void {
    const formData: LeadModel = new LeadModel(this.form.value);
    if (this.form.valid) {
      this.leadService.create(formData).subscribe({
        next: (result: BusinessResponseObject<LeadModel>): void => {
          if (result && result.success) {
            this.store.dispatch(loadLeads()); //Ação para recarregar os leads após o sucesso.
            this.form.reset();
          }
        },
        error: (error) => {
          console.error('Erro ao cadastrar lead: ', error);
        }
      });
    }
  }

  /**
   * @description Ativa ou desativa o modo de depuração.
   */
  public onDebugging(): void {
    this.debugging = !this.debugging;
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
