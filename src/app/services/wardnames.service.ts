import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WardNames } from '../models/models/wardnames.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WardNamesService {
    private baseUrl = environment.urlAddress + '/api/wardnames';

    constructor(private http: HttpClient) { }

    getWardNamess(): Observable<WardNames[]> {
        return this.http.get<WardNames[]>(`${this.baseUrl}`);
    }

    getWardNamesById(id: number): Observable<WardNames> {
        return this.http.get<WardNames>(`${this.baseUrl}/${id}`);
    }

    createWardNames(WardNames: WardNames): Observable<WardNames> {
        return this.http.post<WardNames>(`${this.baseUrl}`, WardNames);
    }

    // Add update and delete methods if needed
}
