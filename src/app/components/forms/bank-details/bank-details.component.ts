import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { EncrDecrService } from '../shared/EncrDecrService.service';
// import { ConfirmPasswordValidator } from '../shared/confirm-password.validator';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  // registrationForm!: UntypedFormGroup;
  registrationForm!: FormGroup;
  errorMessage: string | undefined;
  pageTitle = 'Register';
  submitted: boolean = false;
  // public loadedRegistration: Registration | undefined;
  // private validationMessages: { [key: string]: { [key: string]: string } };

  secondFormGroup = this.fb.group({
    bname: ['', Validators.required],
    hname: ['', Validators.required],
    anumber: ['', Validators.required],
    snumber: [''],

    agreeTerms: [false, Validators.requiredTrue]
  });



  constructor(private fb: UntypedFormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      // custTypeId: [0, Validators.required],
      // custId: ['', Validators.required],
      // firstName: ['', Validators.minLength(3)],
      // lastName: ['', Validators.maxLength(50)],
      // userName: ['', [Validators.required, Validators.email]],
      // password: ['', Validators.required],
      // confirmPassword: ['', Validators.required]
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      ltype: ['', Validators.required],
      dprtmt: ['', Validators.required],
      pnumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  next() {
    if (this.registrationForm.valid) {
      localStorage.setItem('personal', JSON.stringify(this.registrationForm.value));
      console.log(this.registrationForm.value);
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
