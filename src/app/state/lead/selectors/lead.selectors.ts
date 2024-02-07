import {createSelector} from '@ngrx/store';
import {AppState, LeadState} from "../reducers/lead.reducer";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @description Selectors
 * @date 05/02/2024
 */
export const selectLeadFeature = (state: AppState) => state.leads;

export const selectAllLeads = createSelector(
  selectLeadFeature,
  (state: LeadState) => state.leads
);
