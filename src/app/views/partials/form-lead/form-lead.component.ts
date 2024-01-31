import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormLeadDto} from "./form-lead-dto";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class FooterComponent
 * @description Footer
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
  public sindicatos: Array<{ id: number, name: string }> = [
    {id: 1, name: "Sindicato A"},
    {id: 2, name: "Sindicato B"},
    {id: 3, name: "Nenhum desta lista"},
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      syndicate: [this.sindicatos[0]?.id || '', Validators.required],
      status: ['', Validators.required],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    const formData: FormLeadDto = new FormLeadDto(this.form.value);
    console.log('Fomulário de Lead:', formData);
  }

  public onDebugging(): void {
    this.debugging = !this.debugging;
  }
}
