import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

//Servicio autenticación
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm : FormGroup

  constructor(
    private autService : AuthService,
    private formBuilder : FormBuilder,
    private router : Router,
    private alerController : AlertController
  ) {

    this.initFormRegister();

   }

  ngOnInit() {
  }

  private initFormRegister(){
    this.registerForm = this.formBuilder.group ({
      name : ['',[Validators.required]],
      lastname : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async singupUser(event : Event): Promise<void> {

    event.preventDefault();

    if (this.registerForm.valid) {

      const user  = this.registerForm.value;

      this.autService.singup(user.email, user.password, user.name, user.lastname).then ( async ()=>{
        
        this.router.navigateByUrl('/home');
       
        
      }, async error =>{
        const alert = this.alerController.create({
          message : error.message, buttons : [{text: 'ok', role : 'cancel'}]
        });

        (await alert).present();
      });
      
    }
  }

  // obtengo los datos de los campos del formulario
  get emailField(){
    return this.registerForm.get('email');
  }

  get passwordField(){
    return this.registerForm.get('password');
  }

  get nameField (){
    return this.registerForm.get('name');
  }

  get lastname (){
    return this.registerForm.get ('lastname');
  }
}
