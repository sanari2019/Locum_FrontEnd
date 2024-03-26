// validated-patient.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ValidatedPatient } from '../models/models/validatedpatient.model';
import { environment } from 'src/environments/environment';
import { NursedPatient } from '../models/models/nursedpatient.model';

@Injectable({
    providedIn: 'root'
})
export class ValidatedPatientService {

    private apiUrl = environment.urlAddress + '/api/validatedpatient';// Replace this with your actual backend API URL

    constructor(private http: HttpClient) { }

    getValidatedPatient(nursedPatient: NursedPatient): Observable<ValidatedPatient> {
        // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<ValidatedPatient>(`${this.apiUrl}`, nursedPatient).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error);
    }
}
