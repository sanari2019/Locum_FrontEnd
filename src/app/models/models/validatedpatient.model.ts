// validated-patient.model.ts

export class ValidatedPatient {
    patient: string;
    registrationNo: string;
    wardName: string;
    bedCategory: string;
    roomNo: string;
    comment: string;
    status: number;
    constructor() {
        this.patient = '';
        this.registrationNo = '';
        this.wardName = '';
        this.bedCategory = '';
        this.roomNo = '';
        this.comment = '';
        this.status = 0;
    }
}
