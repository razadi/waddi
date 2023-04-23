import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { IUser } from '../core/models/user.model';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  user: any = {};

  constructor(
    private passportService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.passportService.user$.getValue();
    console.log(this.user);
    
  }

  HomeClick(){}

}
