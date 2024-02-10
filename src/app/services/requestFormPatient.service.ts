// request-form-patient.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestFormPatient } from '../models/models/requestFormPatient.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestFormPatientService {
    private baseUrl: string = environment.urlAddress + '/api/requestformpatient'; // Replace with your API base URL

    constructor(private http: HttpClient) { }

    insertRequestFormPatient(requestFormPatient: RequestFormPatient, userId: number): Observable<any> {
        requestFormPatient.userId = userId;
        return this.http.post<any>(`${this.baseUrl}`, requestFormPatient);
    }

    updateRequestFormPatient(requestFormPatient: RequestFormPatient): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/update`, requestFormPatient);
    }

    deleteRequestFormPatient(requestFormPatient: RequestFormPatient): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/delete`, { body: requestFormPatient });
    }

    getAllRequestFormPatients(): Observable<RequestFormPatient[]> {
        return this.http.get<RequestFormPatient[]>(`${this.baseUrl}/getall`);
    }

    getRequestFormPatientById(id: number): Observable<RequestFormPatient> {
        return this.http.get<RequestFormPatient>(`${this.baseUrl}/${id}`);
    }
}
