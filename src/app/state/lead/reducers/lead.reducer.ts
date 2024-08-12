import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import * as LeadActions from '../actions/lead.actions';
import {LeadModel} from "../models/lead-model";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @description Reducers
 * @date 05/02/2024
 */
export interface LeadState {
  leads: LeadModel[];
  error?: any;
}

export interface AppState {
  leads: LeadState;
}

export const initialState: LeadState = {
  leads: [],
  error: null
};

export const leadReducer = createReducer(
  initialState,
  on(LeadActions.loadLeadsSuccess, (state, {leads}) => ({
    ...state,
    leads
  })),
  on(LeadActions.addLeadSuccess, (state, {lead}) => ({
    ...state,
    leads: [...state.leads, lead]
  })),
  on(LeadActions.updateLeadSuccess, (state, {lead}) => ({
    ...state,
    leads: state.leads.map(l => l.id === lead.id ? lead : l),
  })),
  on(LeadActions.deleteLeadSuccess, (state, {id}) => ({
    ...state,
    leads: state.leads.filter(l => l.id !== id),
  }))
);

export const reducers: ActionReducerMap<AppState> = {
  leads: leadReducer,
};
