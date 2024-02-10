import { User } from "../auth/user.model";
import { Department } from "./department.model";
import { Shift } from "./shift.model";
import { Patient } from "./patient.model";

export class ApprovalRequest {
    id: number;
    date_Entered: Date;
    entered_By_User_Id: number;
    department_Id: number;
    shift_Id: number;
    status: string;
    request_Id: number;
    approval_Level: number;


    // Additional properties from User table

    enteredByUser?: User;
    department?: Department;
    shift?: Shift;
    patient?: Patient;

    constructor() {
        this.id = 0;
        this.date_Entered = new Date();
        this.entered_By_User_Id = 0;
        this.department_Id = 0;
        this.shift_Id = 0;
        this.approval_Level = 0;
        this.request_Id = 0;
        this.status = "";

        // Initialize additional properties
        this.enteredByUser = new User();
        this.department = new Department();
        this.shift = new Shift();
        this.patient = new Patient();


    }
}
