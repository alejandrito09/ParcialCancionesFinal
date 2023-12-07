import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireStoreSongService } from 'src/app/services/data/fire-store-song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  //Array que almacena la lista de canciones de firestoreservice
  songList : any = [];

  constructor(private firestoreSongService : FireStoreSongService, private router : Router) {}

  ngOnInit(){
    //obtengo todos los datos del firestorecolecction y transforma los datos
    this.songList = this.firestoreSongService.getSongList().valueChanges();
  }


}
