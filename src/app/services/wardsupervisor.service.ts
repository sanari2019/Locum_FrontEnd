import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WardSupervisor } from '../models/models/wardsupervisor.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WardSupervisorService {
    private baseUrl = environment.urlAddress + '/api/wardsupervisor';

    constructor(private http: HttpClient) { }

    getWardSupervisor(): Observable<WardSupervisor[]> {
        return this.http.get<WardSupervisor[]>(`${this.baseUrl}`);
    }

    getWardSupertvisorById(id: number): Observable<WardSupervisor> {
        return this.http.get<WardSupervisor>(`${this.baseUrl}/${id}`);
    }

    createWardSupervisor(WardNames: WardSupervisor): Observable<WardSupervisor> {
        return this.http.post<WardSupervisor>(`${this.baseUrl}`, WardNames);
    }
    getSupervisorByWardId(wardId: number): Observable<WardSupervisor> {
        const url = `${this.baseUrl}/${wardId}`;
        return this.http.get<WardSupervisor>(url);
    }

    // Add update and delete methods if needed
}
