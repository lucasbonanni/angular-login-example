import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="row">
      <div class="col-md-5">
        <h1>Welcome!</h1>
          <form [formGroup]="profileForm"  (ngSubmit)="submit()">
            <div class="mb-3">
              <label class="form-label">Username</label>
              <div class="input-group">
                <input type="text" name="username" class="form-control" formControlName="username" aria-label="Username" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <div class="input-group">
                <input type="password" name="password" class="form-control" formControlName="password"  aria-label="Password" />
              </div>
            </div>
            <div class="d-grid gap-2 mx-auto">
              <button type="submit" [disabled]="!profileForm.valid" role="button" [ngClass]="{'disabled': !profileForm.valid}"  class="btn btn-primary btn-block" [attr.aria-disabled]="!profileForm.valid" >Login</button>
            </div>
          </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  @Output() login = new EventEmitter<any>();
  profileForm : FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  };

  submit() {
    this.login.emit(this.profileForm.value)
  };
}
