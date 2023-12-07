import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SingersService } from 'src/app/services/data/singers.service';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.page.html',
  styleUrls: ['./singers.page.scss'],
})
export class SingersPage implements OnInit {

  signers : Observable<any>; 

  constructor(
    private authService : AuthService,
    private router : Router,
    private singers : SingersService

  ) { 

    this.signers = this.singers.getSingers();
  }

  ngOnInit() {
  }

  logout () : void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
