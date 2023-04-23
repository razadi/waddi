import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../core/services/session.service';
import { AuthService } from '../core/services/auth.service';
import { IUser } from '../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
    private passportService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      mail: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  get f() { return this.validateForm.controls; }

  async submit(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      let user: IUser = await this.passportService.login(this.validateForm.controls['mail'].value, this.validateForm.controls['password'].value);
      
      if (user) {
        this.passportService.setUser(user);
        this.router.navigate(['/system']);
      }
      return;
    }
    return;
  }

}
