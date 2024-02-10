import { Patient } from "./patient.model";
import { ApprovalRequest } from "./approvalRequest.model";

export class RequestData {
    patient: Patient;
    approvalrequest: ApprovalRequest;
    constructor() {


        // Initialize additional properties
        this.patient = new Patient();
        this.approvalrequest = new ApprovalRequest();
    }
}
