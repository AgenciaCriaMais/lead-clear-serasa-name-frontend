import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LeadModel} from "../../state/lead/models/lead-model";
import {BusinessResponseObject} from "../models/business-rqobject";
import {environment} from "../../../environments/environment";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class LeadService
 * @description Lead Service
 * @date 05/02/2024
 */
@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiUrl = `${environment.API_SYSTEM}/leads`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BusinessResponseObject<LeadModel[]>> {
    return this.http.get<BusinessResponseObject<LeadModel[]>>(this.apiUrl);
  }

  get(id: number): Observable<LeadModel> {
    return this.http.get<LeadModel>(`${this.apiUrl}/${id}`);
  }

  create(lead: LeadModel): Observable<BusinessResponseObject<LeadModel>> {
    return this.http.post<BusinessResponseObject<LeadModel>>(this.apiUrl, lead);
  }

  update(id: number, formLead: LeadModel): Observable<LeadModel> {
    return this.http.put<LeadModel>(`${this.apiUrl}/${id}`, formLead);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
