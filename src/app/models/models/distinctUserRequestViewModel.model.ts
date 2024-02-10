export interface DistinctUserRequestViewModel {
    id: number;
    entered_By_User_Id: number;
    date_Entered: Date;
    Request_id: number;
    approval_Request_Id: number;
    approved_By_User_Id: number;
    status: string;
    department: string;
    shift: string;
    decline_Reason: string;

    // Add other properties based on your backend model
}