import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DepartmentService } from 'src/app/services/department.service';
import { ShiftService } from 'src/app/services/shift.service';
import { RequestMainService } from 'src/app/services/request-main.service';
import { ApprovalRequest } from 'src/app/models/models/approvalRequest.model';
import { User } from 'src/app/models/auth/user.model';
import { UserService } from 'src/app/services/user.service';
import { Patient } from 'src/app/models/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { RequestData } from 'src/app/models/models/requestData.model';
import { RequestFormData } from 'src/app/models/models/requestFormData.model';
import { RequestFormPatient } from 'src/app/models/models/requestFormPatient.model';
import { RequestFormPatientService } from 'src/app/services/requestFormPatient.service';
import { ValidatedPatient } from 'src/app/models/models/validatedpatient.model';
import { ValidatedPatientService } from 'src/app/services/validated-patient.service';

@Component({
  selector: 'app-request-bottomsheet',
  templateUrl: './request-bottomsheet.component.html',
  styleUrls: ['./request-bottomsheet.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class RequestBottomsheetComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup: FormGroup;
  completed: boolean = false;
  state!: string;
  request: ApprovalRequest = new ApprovalRequest;
  departments: any[] = []; // Type appropriately based on your model
  shifts: any[] = []; // Type appropriately based on your model
  formDataList: any[] = [];
  items: ApprovalRequest[] = [];
  user!: User;
  patient!: Patient;
  validatedPatients: Patient[] = [];
  requestData!: RequestData;
  requestformPatient!: RequestFormPatientService;
  use!: number;
  requestFormData!: RequestFormData;
  isPatientValidated: boolean = false;
  constructor(private validatepatientService: ValidatedPatientService, private requestFormPatientService: RequestFormPatientService, private patientService: PatientService, private userService: UserService, private requestmainService: RequestMainService, private departmentService: DepartmentService, private shiftService: ShiftService, private _bottomSheetRef: MatBottomSheetRef<RequestBottomsheetComponent>, private _formBuilder: UntypedFormBuilder, private router: Router) {
    this.secondFormGroup = this._formBuilder.group({
      // Form control initialization
      // For example:
      bname: ['', Validators.required],
      // shift: ['', Validators.required],
      // ... Other form controls ...
    });
    this.uhids.push({ uhid0: '' });

  }


  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }



  // registrationForm!: UntypedFormGroup;
  registrationForm!: FormGroup;
  errorMessage: string | undefined;
  pageTitle = 'Register';
  submitted: boolean = false;
  // public loadedRegistration: Registration | undefined;
  // private validationMessages: { [key: string]: { [key: string]: string } };
  // firstFormGroup = this._formBuilder.group({
  //   dprtmt: ['', Validators.required],
  //   shift: ['', [Validators.required]],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   bname: ['', Validators.required]
  // });

  isLinear = true;
  uhids: any[] = [];




  // ngOnInit(): void {
  //   this.registrationForm = this.fb.group({
  //     dprtmt: ['', Validators.required],
  //     shift: ['', [Validators.required, Validators.email]],
  //   });
  //   // this.uhids.push({ uhid0: '' });
  // }

  addUHID(index: number) {
    const controlName = 'uhid' + this.uhids.length;
    this.uhids.push({ [controlName]: '', isHidden: false }); // Add a new UHID input to the array
    this.secondFormGroup.addControl(controlName, this._formBuilder.control('')); // Add form control dynamically

    // Hide the "Add UHID" button for the specific UHID entry
    this.uhids[index].isHidden = true;
  }
  private loadDepartments() {
    this.departmentService.getDepartments().subscribe((data: any) => {
      this.departments = data; // Update departments array with API response
    });
  }

  private loadShifts() {
    this.shiftService.getShifts().subscribe((data: any) => {
      this.shifts = data; // Update shifts array with API response
    });
  }





  save() {
    if (this.registrationForm.valid) {
      // Handle form submission logic here (e.g., send data to backend)
      console.log(this.registrationForm.value); // Example: Log form values
    } else {
      // Handle form validation errors or display messages
    }
  }
  onSaveComplete(): void {
    this.firstFormGroup.reset()
    this.secondFormGroup.reset();
    this.ngOnInit();
    // this.router.navigate(['/registrations']);
  }
  next() {
    if (this.firstFormGroup.valid) {
      // Store the value of firstFormGroup in localStorage
      const formData = JSON.stringify(this.firstFormGroup.value);
      localStorage.setItem('requestFormData', formData);
      this.fetchValidatedPatients(this.user?.id);
    }
  }
  next2() {
    // if (this.secondFormGroup.valid) {
    //   // Store the value of firstFormGroup in localStorage
    //   const formData = JSON.stringify(this.secondFormGroup.value);
    //   // const formData = this.secondFormGroup.value;
    //   this.formDataList.push(formData);
    //   //this.secondFormGroup.reset();
    //   localStorage.setItem('requestFormData2', formData);
    // }
  }
  add() {
    if (this.secondFormGroup.valid) {
      if (this.secondFormGroup.dirty) {
        const requestFormData = localStorage.getItem('requestFormData');
        const user = localStorage.getItem('user');

        if (requestFormData) {
          this.requestFormData = JSON.parse(requestFormData);
          const firstCtrlValue = Object.values(this.requestFormData)[0];
          const firstCtrl2Value = Object.values(this.requestFormData)[1];
          this.use = this.user?.id;

          const patientData = { ...this.patient, ...this.secondFormGroup.value, ...this.requestFormData };
          const requestData = new RequestData();

          requestData.patient = { ...this.secondFormGroup.value };


          const request = new ApprovalRequest();
          requestData.approvalrequest.entered_By_User_Id = this.user?.id;
          requestData.approvalrequest.ward_id = firstCtrlValue;
          request.date_Entered = new Date();
          requestData.approvalrequest.shift_Id = firstCtrl2Value;
          requestData.approvalrequest.status = "Pending";
          requestData.approvalrequest.approval_Level = 2;
          // localStorage.removeItem('requestFormData');
          // this.validatepatientService.getValidatedPatient()
          this.patientService.createPatient(requestData).subscribe(res => {
            alert(" Validation SuccessFul");
            this.fetchValidatedPatients(this.user?.id);
            this.secondFormGroup.reset();

          }, (error: any) => {
            // Handle the error
            console.error('Validation request unsuccessful:', error);
          })

          // this.requestmainService.createRequest(request).subscribe(response => {
          //   console.log('Request created successfully:', response);
          // }, (error: any) => {
          //   // Handle the error
          //   console.error('Error creating request:', error);
          // })
        } else {
          console.error('Error validating requestFormData:', "No department and shift in local storage");
        }
      } else {
        console.error('Error validating patient:', "Not Dirty");
      }
    } else {
      // Handle form validation errors or display messages
      console.log('Form is not valid');

    }
  }

  fetchValidatedPatients(enteredByUserId: number): void {
    this.patientService.getValidatedPatientsByUser(enteredByUserId)
      .subscribe(patients => {
        this.validatedPatients = patients;
        console.log(patients);
      });
  }

  onDelete(patient: Patient): void {
    // You can add a confirmation dialog if needed
    const confirmDelete = confirm('Are you sure you want to delete this patient?');
    if (confirmDelete) {
      // // Call the patient service to delete the record
      // patient = this.
      this.patientService.deletePatient(patient.id).subscribe(
        () => {
          // Handle success, e.g., remove the patient from the array

          console.log('Successfully Deleted');
          this.fetchValidatedPatients(this.user?.id);
        },
        (error) => {
          // Handle error, e.g., show an error message
          console.error('Error deleting patient:', error);
        }
      );

    }
  }


  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [1],
      firstCtrl2: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      first_Name: [''],
      last_Name: [''],
      uhid: [''],

    });
    this.loadDepartments();
    this.loadShifts();
    // this.fetchValidatedPatients(this.user?.id)

    const userId = localStorage.getItem('user');

    if (userId) {

      this.userService.getUser(parseInt(userId)).subscribe(
        (response) => {
          this.user = response;
        },
        (error: any) => {
          console.error('Error fetching user name:', error);
        }
      );
      this.fetchValidatedPatients(parseInt(userId))
    }
  }
  updateandinsert(requestFormPatient: RequestFormPatient, userId: number): void {
    this.requestFormPatientService.insertRequestFormPatient(requestFormPatient, userId)
      .subscribe(
        () => {
          // Handle success, if needed
        },
        (error) => {
          // Handle error, if needed
        }
      );
  }

  done() {
    this.completed = true;
    this.state = 'done';
    const storedData1 = localStorage.getItem('user');
    const requestFormPatient = new RequestFormPatient();
    requestFormPatient.approval_Request_Id = 1;
    requestFormPatient.approval_level_Id = 0;
    if (storedData1) {
      this.updateandinsert(requestFormPatient, parseInt(storedData1))
    }

    console.log(this.firstFormGroup.valid);
    localStorage.removeItem('requestFormData');
    localStorage.removeItem('requestFormData2');
    this.items = [];
    this._bottomSheetRef.dismiss();
  }
}

