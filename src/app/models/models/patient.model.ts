export class Patient {
    id: number;
    first_Name: string;
    last_Name: string;
    uhid: string;
    is_Validated: boolean;
    created_at: Date;

    constructor() {
        this.id = 0;
        this.first_Name = "";
        this.last_Name = "";
        this.uhid = "";
        this.is_Validated = false;
        this.created_at = new Date;
    }
}