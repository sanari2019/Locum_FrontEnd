// approval.model.ts

export class Approval {
    id: number;
    approval_Request_Id: number;
    approved_By_User_Id: number;
    status: string;
    created_at: Date;
    userId: number;
    decline_Reason: string;

    constructor() {
        this.id = 0;
        this.approval_Request_Id = 0;
        this.status = "";
        this.approved_By_User_Id = 0;
        this.created_at = new Date;
        this.userId = 0;
        this.decline_Reason = '';
    }
}
