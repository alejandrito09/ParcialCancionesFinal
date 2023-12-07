import { Component } from '@angular/core';
import { FireStoreSongService } from "src/app/services/data/fire-store-song.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  //Array que almacena la lista de canciones de firestoreservice
  songList : any = [];

  constructor(private firestoreSongService : FireStoreSongService, private router : Router) {}

  ngOnInit(){
    //obtengo todos los datos del firestorecolecction y transforma los datos
    this.songList = this.firestoreSongService.getSongList().valueChanges();
  }

}
