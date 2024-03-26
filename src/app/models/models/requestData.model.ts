import { Patient } from "./patient.model";
import { ValidatedPatient } from "./validatedpatient.model";
import { NursedPatient } from "./nursedpatient.model";
import { ApprovalRequest } from "./approvalRequest.model";

export class RequestData {
    patient: NursedPatient;
    approvalrequest: ApprovalRequest;
    constructor() {


        // Initialize additional properties
        this.patient = new NursedPatient();
        this.approvalrequest = new ApprovalRequest();
    }
}
