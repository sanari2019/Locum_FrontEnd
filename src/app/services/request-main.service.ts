import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApprovalRequest } from '../models/models/approvalRequest.model';
import { environment } from 'src/environments/environment';
import { RequestFormPatient } from '../models/models/requestFormPatient.model';
import { ApprovalDetails } from '../models/models/approvaldetails.model';
import { Approval } from '../models/models/approval.model';

@Injectable({
  providedIn: 'root'
})
export class RequestMainService {
  private baseUrl = environment.urlAddress + '/api/approvalrequest';

  constructor(private http: HttpClient) { }

  getRequests(): Observable<ApprovalRequest[]> {
    return this.http.get<ApprovalRequest[]>(`${this.baseUrl}`);
  }

  getRequestById(id: number): Observable<ApprovalRequest> {
    return this.http.get<ApprovalRequest>(`${this.baseUrl}/${id}`);
  }

  createRequest(request: ApprovalRequest): Observable<ApprovalRequest> {
    return this.http.post<ApprovalRequest>(`${this.baseUrl}`, request);
  }

  updateRequest(request: ApprovalRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/updatepayment`, request);
  }

  deleteRequest(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getRequestsByUserId(userId: number): Observable<ApprovalRequest[]> {
    return this.http.get<ApprovalRequest[]>(`${this.baseUrl}/user/${userId}`);
  }
  getLatestSid(): Observable<ApprovalRequest> {
    return this.http.get<ApprovalRequest>(`${this.baseUrl}/getlatestsid`);
  }
  getPendingRequestsByUserId(userId: number): Observable<ApprovalRequest[]> {
    return this.http.get<ApprovalRequest[]>(`${this.baseUrl}/getpendingrequest/${userId}`);
  }
  getDecidedRequestsByUserId(userId: number): Observable<ApprovalRequest[]> {
    return this.http.get<ApprovalRequest[]>(`${this.baseUrl}/getdecidedrequest/${userId}`);
  }
  getSupApprovalRequests(): Observable<ApprovalRequest[]> {
    return this.http.get<ApprovalRequest[]>(`${this.baseUrl}/getsupapprovalrequest`);
  }
  getCnoPendingRequests(user_id: number): Observable<RequestFormPatient[]> {
    return this.http.get<RequestFormPatient[]>(`${this.baseUrl}/getcnopendingrequest/${user_id}`);
  }
  UpdateRequestandInsertRequestData(requestFormPatient: RequestFormPatient, userId: number): Observable<any> {
    requestFormPatient.userId = userId;
    const url = `${this.baseUrl}/updatereqninsert/${userId}`;
    return this.http.post(url, requestFormPatient);
  }
  UpdateApprovalandRequest(approval: Approval, userId: number): Observable<any> {
    approval.userId = userId;
    const url = `${this.baseUrl}/updaterequest/${userId}`;
    return this.http.post(url, approval);
  }
  getRequestByRequestId(requestId: number): Observable<ApprovalRequest> {
    const url = `${this.baseUrl}/req/${requestId}`;
    return this.http.get<ApprovalRequest>(url);
  }

  getRequestsByRequestId(requestId: number): Observable<ApprovalRequest[]> {
    const url = `${this.baseUrl}/allreq/${requestId}`;
    return this.http.get<ApprovalRequest[]>(url);
  }
  getApprovalDetails(approvalRequestId: number): Observable<ApprovalDetails[]> {
    const url = `${this.baseUrl}/GetApprovalDetails/${approvalRequestId}`;
    return this.http.get<ApprovalDetails[]>(url);
  }

}
