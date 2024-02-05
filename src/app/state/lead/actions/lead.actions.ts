import {createAction, props} from '@ngrx/store';
import {LeadModel} from "../models/lead-model";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @description Actions
 * @date 05/02/2024
 */

// Ações para carregar leads
export const loadLeads = createAction('[Lead] Load');
export const loadLeadsSuccess = createAction('[Lead] Load Success', props<{ leads: LeadModel[] }>());
export const loadLeadsFailure = createAction('[Lead] Load Failure', props<{ error: any }>());


// Ação para adicionar um novo lead
export const addLead = createAction('[Lead] Add', props<{ lead: LeadModel }>());
export const addLeadSuccess = createAction('[Lead] Add Success', props<{ lead: LeadModel }>());
export const addLeadFailure = createAction('[Lead] Add Failure', props<{ error: any }>());


// Ações para atualizar um lead existente
export const updateLead = createAction('[Lead] Update', props<{ lead: LeadModel }>());
export const updateLeadSuccess = createAction('[Lead] Update Success', props<{ lead: LeadModel }>());
export const updateLeadFailure = createAction('[Lead] Update Failure', props<{ error: any }>());


// Ações para deletar um lead
export const deleteLead = createAction('[Lead] Delete', props<{ id: number }>());
export const deleteLeadSuccess = createAction('[Lead] Delete Success', props<{ id: number }>());
export const deleteLeadFailure = createAction('[Lead] Delete Failure', props<{ error: any }>());
