// approval.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Approval } from '../models/models/approval.model';
import { environment } from 'src/environments/environment';
import { ApprovalDetails } from '../models/models/approvaldetails.model';
import { DistinctUserRequestViewModel } from '../models/models/distinctUserRequestViewModel.model';

@Injectable({
    providedIn: 'root'
})
export class ApprovalService {
    private baseUrl = environment.urlAddress + '/api/approval';

    constructor(private http: HttpClient) { }

    getApprovals(): Observable<Approval[]> {
        return this.http.get<Approval[]>(`${this.baseUrl}`);
    }

    getApprovalById(id: number): Observable<Approval> {
        return this.http.get<Approval>(`${this.baseUrl}/${id}`);
    }

    createApproval(approval: Approval): Observable<Approval> {
        return this.http.post<Approval>(`${this.baseUrl}`, approval);
    }
    updateApproval(approval: Approval): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/update`, approval);
    }
    UpdateApprovalandRequest(approval: Approval, userId: number): Observable<any> {
        approval.userId = userId;
        const url = `${this.baseUrl}/updaterequest`;
        return this.http.post<any>(url, approval)
    }
    UpdateDeclineandRequest(approval: Approval, userId: number): Observable<any> {
        approval.userId = userId;
        const url = `${this.baseUrl}/updatedecline`;
        return this.http.post<any>(url, approval)
    }
    getApprovalDetails(approvalRequestId: number): Observable<DistinctUserRequestViewModel[]> {
        const url = `${this.baseUrl}/approval-details/${approvalRequestId}`;

        return this.http.get<DistinctUserRequestViewModel[]>(url);
    }

    // Add update and delete methods if needed
}
