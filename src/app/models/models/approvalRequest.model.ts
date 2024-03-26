import { User } from "../auth/user.model";
import { WardNames } from "./wardnames.model";
import { Shift } from "./shift.model";
import { Patient } from "./patient.model";

export class ApprovalRequest {
    id: number;
    date_Entered: Date;
    entered_By_User_Id: number;
    ward_id: number;
    shift_Id: number;
    status: string;
    request_Id: number;
    approval_Level: number;
    request_code: string;


    // Additional properties from User table

    enteredByUser?: User;
    wardname?: WardNames;
    shift?: Shift;
    patient?: Patient;

    constructor() {
        this.id = 0;
        this.date_Entered = new Date();
        this.entered_By_User_Id = 0;
        this.ward_id = 0;
        this.shift_Id = 0;
        this.approval_Level = 0;
        this.request_Id = 0;
        this.request_code = '';
        this.status = "";

        // Initialize additional properties
        this.enteredByUser = new User();
        this.wardname = new WardNames();
        this.shift = new Shift();
        this.patient = new Patient();


    }
}
