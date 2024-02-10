import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocumType } from '../models/models/locum-type.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocumTypeService {
  private baseUrl = environment.urlAddress + '/api/locumtype';

  constructor(private http: HttpClient) { }

  getLocumTypes(): Observable<LocumType[]> {
    return this.http.get<LocumType[]>(`${this.baseUrl}`);
  }

  getLocumType(id: number): Observable<LocumType> {
    return this.http.get<LocumType>(`${this.baseUrl}/${id}`);
  }

  createLocumType(locumType: LocumType): Observable<LocumType> {
    return this.http.post<LocumType>(`${this.baseUrl}`, locumType);
  }
}
