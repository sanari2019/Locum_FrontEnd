import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { EncrDecrService } from '../shared/EncrDecrService.service';
// import { ConfirmPasswordValidator } from '../shared/confirm-password.validator';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  // registrationForm!: UntypedFormGroup;
  registrationForm!: FormGroup;
  errorMessage: string | undefined;
  pageTitle = 'Register';
  submitted: boolean = false;
  // public loadedRegistration: Registration | undefined;
  // private validationMessages: { [key: string]: { [key: string]: string } };
  firstFormGroup = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    ltype: ['', Validators.required],
    dprtmt: ['', Validators.required],
    pnumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });


  constructor(private fb: UntypedFormBuilder, private router: Router) { }

  ngOnInit(): void {

  }

  next() {
    if (this.firstFormGroup.valid) {
      localStorage.setItem('personal', JSON.stringify(this.firstFormGroup.value));
      console.log(this.firstFormGroup.value);
    } else {
      // Handle form validation errors or display messages
    }
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
    this.registrationForm.reset();
    // this.router.navigate(['/registrations']);
  }

}
