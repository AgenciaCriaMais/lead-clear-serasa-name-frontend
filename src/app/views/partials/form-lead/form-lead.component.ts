import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormLeadDto} from "../../../models/form-lead-dto";
import {FormLeadService} from "../../../services/form-lead.service";
import {Router} from "@angular/router";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class FormLeadComponent
 * @description Formulário de Lead
 * @date 31/01/2024
 */
@Component({
  selector: 'app-form-lead',
  templateUrl: './form-lead.component.html',
  styleUrls: ['./form-lead.component.sass']
})
export class FormLeadComponent implements OnInit {
  public form!: FormGroup;
  public debugging = false;

  constructor(private formBuilder: FormBuilder,
              private formLeadService: FormLeadService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  public onSubmit(): void {
    const formData: FormLeadDto = new FormLeadDto(this.form.value);
    if (this.form.valid) {
      this.formLeadService.create(formData).subscribe({
        next: (result) => {
          console.log(result);
          this.form.reset();
        },
        error: (error) => {
          debugger;
          console.error('There was an error!', error);
        }
      });
    }
  }

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
