// request-form-patient.model.ts

export class ApprovalDetails {
    approval_Request_Id: number;
    approval_Level_Id: number;
    is_Submitted: number;
    date_Entered: Date;
    entered_By_User_Id: number;
    department_Id: number;
    shift_Id: number;
    status: string;
    patient_Id: number;
    locum_Type: string;
    first_Name: string;
    last_Name: string;
    department: string;
    shift_Name: string;

    constructor() {
        this.approval_Request_Id = 0;
        this.approval_Level_Id = 0;
        this.is_Submitted = 0;
        this.date_Entered = new Date();
        this.entered_By_User_Id = 0;
        this.department_Id = 0;
        this.shift_Id = 0;
        this.status = '';
        this.patient_Id = 0;
        this.locum_Type = '';
        this.first_Name = '';
        this.last_Name = '';
        this.department = '';
        this.shift_Name = '';
    }
}
