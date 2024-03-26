// nursed-patient.model.ts

export class NursedPatient {
    UHID: string;
    DateNursed: Date; // Assuming this is a string representing date/time in ISO format
    ShiftId: number;
    RoomNo: string;
    WardName: string;

    constructor() {
        this.UHID = '';
        this.DateNursed = new Date();
        this.ShiftId = 0;
        this.RoomNo = '';
        this.WardName = '';
    }
}


function processNursedPatient(nursedPatient: NursedPatient, propertyName: string) {
    // Step 2: Check if the property exists
    if (propertyName in nursedPatient) {
        // Step 3: Use type assertion to inform TypeScript
        const propertyValue = nursedPatient[propertyName as keyof NursedPatient];
        console.log(propertyValue);
    } else {
        console.log(`Property ${propertyName} does not exist on NursedPatient`);
    }
}