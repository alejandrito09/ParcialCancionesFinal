import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app'
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //PARA VALIDAR Y PROTEGER LAS  PAGINAS AUTENTCADAS
  public userAuth$ : Observable<firebase.User>;

  constructor(
    private firestore : AngularFirestore,
    private auth : AngularFireAuth
  ) { 

    this.userAuth$  = auth.authState;
  }

  //OBTENGO EL USUARIO EN SESIÓN
  getUser(): any {
    return firebase.auth().currentUser;
  }

  loginWithEmail(email : string, password : string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async singup(email : string, password : string, nombres: string, apellidos: string) :Promise<firebase.auth.UserCredential> {
    const  response = await this.auth.createUserWithEmailAndPassword(email, password);
    (await this.createUser(nombres, apellidos, email, response.user.uid))
    return response;
  }


  createUser(nombres : string, apellidos: string, email: string, id : string):Promise<void>{
    
    return this.firestore.collection ('users').doc(id).set({
      nombres, apellidos, email
    });
  }

  resetPassword(email : string){
    return this.auth.sendPasswordResetEmail(email);
  }

  logout(){
    return this.auth.signOut();
  }

}
