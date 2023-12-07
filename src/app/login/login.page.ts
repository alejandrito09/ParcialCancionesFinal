import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

//Servicio autenticación

import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm : FormGroup;

  constructor(
    private autService : AuthService,
    private formBuilder : FormBuilder,
    private router : Router,
    private alertController : AlertController
  ) {

    this.initFormLogin();

   }

  ngOnInit() {
  }

  async loginUser(event : Event): Promise<void>{
    
    event.preventDefault();

    if (!this.loginForm.valid) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Datos invalidos',
        message: 'Los datos del formulario ingresado no es valido!',
        buttons: ['OK'],
      });

      alert.present()

      return
    }

      const user  = this.loginForm.value;

      this.autService.loginWithEmail(user.email, user.password).then (()=>{
        this.router.navigateByUrl('/dashboard');
      }, async error =>{
        const alert = await this.alertController.create({
          message : error.message, buttons : [{text: 'ok', role : 'cancel'}]
        });

       alert.present()
      });
      
  }

  private initFormLogin(){
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get emailField(){
    return this.loginForm.get('email');
  }

  get passwordField(){
    return this.loginForm.get('password');
  }

}
