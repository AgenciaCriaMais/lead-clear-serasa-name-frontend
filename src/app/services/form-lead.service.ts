import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormLeadDto} from "../models/form-lead-dto";

@Injectable({
  providedIn: 'root',
})
export class FormLeadService {
  private apiUrl = 'http://127.0.0.1:8000/api/leads';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<FormLeadDto[]> {
    return this.http.get<FormLeadDto[]>(this.apiUrl);
  }

  get(id: string): Observable<FormLeadDto> {
    return this.http.get<FormLeadDto>(`${this.apiUrl}/${id}`);
  }

  create(formLead: FormLeadDto): Observable<FormLeadDto> {
    return this.http.post<FormLeadDto>(this.apiUrl, formLead);
  }

  update(id: string, formLead: FormLeadDto): Observable<FormLeadDto> {
    return this.http.put<FormLeadDto>(`${this.apiUrl}/${id}`, formLead);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
