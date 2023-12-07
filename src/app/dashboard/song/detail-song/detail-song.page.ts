import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"; //
import { FireStoreSongService } from "src/app/services/data/fire-store-song.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.page.html',
  styleUrls: ['./detail-song.page.scss'],
})
export class DetailSongPage implements OnInit {
  songId : any;
  song : any = {};

  constructor(private firestoreSongService : FireStoreSongService,
    public router : Router,
    private alerController : AlertController,
    private ngZone : NgZone,
    private activateRoute : ActivatedRoute)
  {}

  ngOnInit() {

    this.songId = this.activateRoute.snapshot.paramMap.get('id');
    this.song = this.firestoreSongService.getSong(this.songId).valueChanges();
  }

  async deleteSong(){
    const alert = await this.alerController.create({
  
      header: 'Eliminar',
      message: 'Estas seguro que deseas eliminar esta canción de la colección?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()  => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            //Elimino y retorno a home
            this.firestoreSongService.deleteSong(this.songId).then(() => {
              //Ejecuto codigo fuera de la zona de Angular
              // Para refrescar la lista de canciónes en home
              this.ngZone.run(() => {
                this.router.navigateByUrl('/dashboard/songs'); 
              });
            });
          }
        }
      ]
    })
    await alert.present();
  }
}
