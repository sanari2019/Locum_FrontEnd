import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/auth/user.model';
import { EncrDecrService } from 'src/app/services/EncrDecrService.service';
import { LocumType } from 'src/app/models/models/locum-type.model';
// import { ConfirmPasswordValidator } from '../shared/confirm-password.validator';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/models/department.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLinear = true;
  user: User = new User;
  locumType!: [
    { value: 'staff', viewValue: 'Internal' },
    { value: 'non_staff', viewValue: 'External' }
  ];
  departments: Department[] = [];


  constructor(private departmentService: DepartmentService, private _formBuilder: FormBuilder, private router: Router, private userService: UserService, private encrdecr: EncrDecrService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      // Define form controls for the first step
      first_Name: ['', Validators.required],
      last_Name: ['', Validators.required],
      locum_Type: [Validators.required],
      department_id: [Validators.required],
      phone_Number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      bank_Name: ['', Validators.required],
      holders_Name: ['', Validators.required],
      account_Number: ['', Validators.required],
      sort_Code: [''],
      agree_Terms: [false, Validators.required],
    });
    this.loadDepartments();
  }

  formHasErrors(): boolean {
    const formControls = this.firstFormGroup.controls;

    for (const controlName in formControls) {
      const control = formControls[controlName];

      if (control.invalid && (control.dirty || control.touched)) {
        return true;
      }
    }

    return false;
  }

  private loadDepartments() {
    this.departmentService.getDepartments().subscribe((data: any) => {
      this.departments = data; // Update shifts array with API response
    });
  }




  createAccount(): void {
    if (this.firstFormGroup.valid) {
      if (this.firstFormGroup.dirty) {
        this.user.agree_Terms = true;
        const userData = { ...this.user, ...this.firstFormGroup.value };
        // userData.password = this.encrdecr.set('12345678$#@$^@1ERF', userData.password)
        this.userService.createUser(userData).subscribe(res => {
          alert(" Registration SuccessFul");
          this.onSaveComplete();
        })
      } else {
        console.error('Error creating user:', "Not Dirty");
      }
    } else {
      // Handle form validation errors or display messages
      console.log('Form is not valid');
    }

  }
  next() {
    if (this.firstFormGroup.valid) {
      localStorage.setItem('personal', JSON.stringify(this.firstFormGroup.value));
      console.log(this.firstFormGroup.value);
    } else {
      // Handle form validation errors or display messages
    }
  }

  // save() {
  //   if (this.registrationForm.valid) {
  //     // Handle form submission logic here (e.g., send data to backend)
  //     console.log(this.registrationForm.value); // Example: Log form values
  //   } else {
  //     // Handle form validation errors or display messages
  //   }
  // }
  onSaveComplete(): void {
    this.firstFormGroup.reset();
    this.router.navigate(['/auth/login']);
  }
}
