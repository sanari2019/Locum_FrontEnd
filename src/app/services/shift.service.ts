import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shift } from '../models/models/shift.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private baseUrl = environment.urlAddress + '/api/shift';

  constructor(private http: HttpClient) { }

  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${this.baseUrl}`);
  }

  getShiftById(id: number): Observable<Shift> {
    return this.http.get<Shift>(`${this.baseUrl}/${id}`);
  }

  createShift(shift: Shift): Observable<Shift> {
    return this.http.post<Shift>(`${this.baseUrl}`, shift);
  }

  // Add update and delete methods if needed
}
