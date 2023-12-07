import { Component, NgZone, OnInit } from '@angular/core';

import {FormGroup, FormBuilder, Validators } from "@angular/forms";
import {AlertController, LoadingController  } from "@ionic/angular";
import { FireStoreSongService } from "src/app/services/data/fire-store-song.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.page.html',
  styleUrls: ['./create-song.page.scss'],
})
export class CreateSongPage implements OnInit {

  public createSongForm:FormGroup;

  constructor(

      private loadingController: LoadingController,
      private alertController:AlertController,
      private firestoreSongService:FireStoreSongService,
      private formBuilder:FormBuilder,
      private router:Router,
      private ngZone : NgZone

      ){

        this.createSongForm = this.formBuilder.group({
          albumName: ['', [Validators.required, Validators.minLength(3)]], 
          artistName: ['', Validators.required],
          songName: ['', Validators.required],
          songDescription: ['', Validators.required]
        });

       }

  ngOnInit() {
  }

  //VALIDO EL FORMULARIO
  async validateForm(){

    let alert = await this.alertController.create({
      header: 'Error',
      message: 'Faltan datos por ingresar',
      buttons: ['Ok']
    });

    if (!this.createSongForm.valid) {
      await alert.present();

    }else{

      this.createSong();
    }

    
  }

  async createSong(){

    const loading = await this.loadingController.create();

    const albumName = this.createSongForm.value.albumName;
    const artistName = this.createSongForm.value.artistName;
    const songName = this.createSongForm.value.songName;
    const songDescription = this.createSongForm.value.songDescription;

    
    this.firestoreSongService.createSong(albumName,artistName, songName, songDescription)
    .then(() => {
        loading.dismiss()
        .then(()=>
          {
            this.clearForm();
            this.showSuccessMsg(songName);
          }
        );
      },error => {
          console.error(error);
        }
    );

    await loading.present();
  }

  async showSuccessMsg(songName : string){

    const alert = await this.alertController.create({
  
      header: songName+' se agregó exitosamente',
      message: '¿Quieres agregar una nueva canción?',
      buttons: [
        {
          text: 'Ver lista de canciones',
          handler: ()  => {

            //Retorno a la lista de canciones 
            this.ngZone.run(() => {
              this.router.navigateByUrl(''); 
            });
            
          }
        },
        {
          text: 'Ok',
          role : 'cancel',
          handler: () => {

            //Limpio los campos del formulario
            this.clearForm();
          }
        }
      ]
    });
    
    await alert.present();
  }

  //Limpiar formulario
  clearForm() {
    this.createSongForm.reset();
  }

}
