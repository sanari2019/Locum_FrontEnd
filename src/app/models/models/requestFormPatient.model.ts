import { ApprovalRequest } from "./approvalRequest.model";
import { Approval } from "./approval.model";
import { Department } from "./department.model";
import { User } from "../auth/user.model";
import { Shift } from "./shift.model";
import { ApprovalDetails } from "./approvaldetails.model";
import { Patient } from "./patient.model";
import { WardNames } from "./wardnames.model";
import { WardSupervisor } from "./wardsupervisor.model";

export class RequestFormPatient {
  // Define properties based on your RequestFormPatient C# model
  approval_Request_Id: number;
  approval_level_Id: number;
  is_submitted: boolean;
  userId: number;
  first_name: string;
  last_name: string;
  ward_id: number;
  approvalRequest: ApprovalRequest;
  request: Approval;
  user: User;
  shift: Shift;
  approvalDetails: ApprovalDetails;
  patient: Patient;
  approval: Approval;
  wardnames: WardNames;
  wardsupervisor: WardSupervisor;



  constructor() {
    this.approval_Request_Id = 0;
    this.approval_level_Id = 0;
    this.is_submitted = false;
    this.userId = 0;
    this.first_name = "";
    this.last_name = "";
    this.ward_id = 0;
    this.approvalRequest = new ApprovalRequest();
    this.request = new Approval();
    this.user = new User();
    this.shift = new Shift();
    this.approvalDetails = new ApprovalDetails();
    this.patient = new Patient();
    this.approval = new Approval();
    this.wardnames = new WardNames();
    this.wardsupervisor = new WardSupervisor();
  }
}
