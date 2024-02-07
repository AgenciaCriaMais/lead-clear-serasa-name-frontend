import {Component, OnInit} from '@angular/core';
import {loadLeads} from "../../../state/lead/actions/lead.actions";
import {FormBuilder} from "@angular/forms";
import {LeadService} from "../../../core/services/lead.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/lead/reducers/lead.reducer";
import {selectAllLeads} from "../../../state/lead/selectors/lead.selectors";
import {Observable} from "rxjs";
import {LeadModel} from "../../../state/lead/models/lead-model";

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

  constructor(private formBuilder: FormBuilder,
              private leadService: LeadService,
              private store: Store<AppState>) {
    this.leads$ = this.store.select(selectAllLeads);
  }

  ngOnInit(): void {
    this.store.dispatch(loadLeads());
  }
}
