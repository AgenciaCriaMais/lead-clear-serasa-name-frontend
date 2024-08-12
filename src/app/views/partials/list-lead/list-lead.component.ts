import {Component, OnInit} from '@angular/core';
import {loadLeads} from "../../../state/lead/actions/lead.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LeadService} from "../../../core/services/lead.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/lead/reducers/lead.reducer";
import {selectAllLeads} from "../../../state/lead/selectors/lead.selectors";
import {Observable} from "rxjs";
import {LeadModel} from "../../../state/lead/models/lead-model";
import {BusinessResponseObject} from "../../../core/models/business-rqobject";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class ListLeadComponent
 * @date 04/02/2024
 */
@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.sass']
})
export class ListLeadComponent implements OnInit {
  public today = `${new Date().getFullYear()}`;
  public leads$: Observable<LeadModel[]>;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private leadService: LeadService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private store: Store<AppState>) {
    this.leads$ = this.store.select(selectAllLeads);
  }

  ngOnInit(): void {
    this.store.dispatch(loadLeads());
    this.createForm();
  }

  public edit(lead: LeadModel): void {
    this.form.patchValue(lead);
  }

  public delete(lead: LeadModel): void {
    Swal.fire({
      title: "Atenção!",
      text: "Você deseja realmente deletar este item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Não"
    }).then((result) => {
      if (result.isConfirmed) {
        this.leadService.delete(lead.id).subscribe({
          next: (result: BusinessResponseObject<LeadModel>): void => {
            if (result && result.success) {
              this.store.dispatch(loadLeads());
            }
          },
          error: (error) => {
            console.error('Erro ao deletar o lead: ', error);
          }
        });
      }
    });
  }

  public goHome(): void {
    this.router.navigate([''], {relativeTo: this.activatedRoute});
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      syndicate: ['', Validators.required],
      status: [''],
      phone: ['', Validators.required],
      description: ['']
    });
  }

  public onSubmit(): void {
    const formData: LeadModel = new LeadModel(this.form.value);
    if (this.form.valid) {
      this.leadService.update(formData.id, formData)
        .subscribe((response): void => {
          this.store.dispatch(loadLeads());
        });
    }
  }
}
