import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as LeadActions from '../actions/lead.actions';
import {LeadService} from '../../../core/services/lead.service';
import {BusinessResponseObject} from "../../../core/models/business-rqobject";
import {LeadModel} from "../models/lead-model";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @description Effects
 * @date 05/02/2024
 */
@Injectable()
export class LeadEffects {

  createLead$ = createEffect(() => this.actions$.pipe(
    ofType(LeadActions.addLead),
    mergeMap((action) => this.leadService.create(action.lead)
      .pipe(
        map((response: BusinessResponseObject<LeadModel>) => {
          if (response && response.success && response.data) {
            return LeadActions.addLeadSuccess({lead: response.data});
          } else {
            throw new Error('Falha ao criar lead');
          }
        }),
        catchError(error => of(LeadActions.addLeadFailure({error: error.message})))
      )
    )
  ));

  loadLeads$ = createEffect(() => this.actions$.pipe(
    ofType(LeadActions.loadLeads),
    mergeMap(() => this.leadService.getAll()
      .pipe(
        map((result: BusinessResponseObject<LeadModel[]>) => {
          if (result && result.success && result.data) {
            return LeadActions.loadLeadsSuccess({leads: result.data});
          } else {
            throw new Error('Falha ao carregar leads');
          }
        }),
        catchError(error => of(LeadActions.loadLeadsFailure({error: error.message})))
      )
    )
  ));

  deleteLead$ = createEffect(() => this.actions$.pipe(
    ofType(LeadActions.deleteLead),
    mergeMap(action => this.leadService.delete(action.id)
      .pipe(
        map(() => LeadActions.deleteLeadSuccess({id: action.id})),
        catchError(error => of(LeadActions.deleteLeadFailure({error: error.message})))
      )
    )
  ));

  updateLead$ = createEffect(() => this.actions$.pipe(
    ofType(LeadActions.updateLead),
    mergeMap(action => this.leadService.update(action.lead.id, action.lead)
      .pipe(
        map(updatedLead => LeadActions.updateLeadSuccess({lead: updatedLead})),
        catchError(error => of(LeadActions.updateLeadFailure({error: error.message})))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private leadService: LeadService
  ) {
  }
}
