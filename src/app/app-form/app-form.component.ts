import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.sass']
})
export class AppFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  applicationForm = this.fb.group({
    firstName: ['', Validators.minLength(3)],
    lastName: new FormControl('Enter Last Name', Validators.minLength(2))
  });

  onSubmit() {
    console.log("Form Submitted")
    console.log(this.applicationForm.value);
  }

}
