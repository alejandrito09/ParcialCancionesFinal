import { Injectable } from '@angular/core';
import { Song } from "src/app/song";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FireStoreSongService {

  constructor( public firestore: AngularFirestore ) { }

  createSong(
    albumName:string,
     artistName:string,
      songName:string,
       songDescription:string
       ):Promise<void>{

    const id = this.firestore.createId();
    return this.firestore.doc('songList/'+id).set({

      id, albumName, artistName, songName , songDescription

    });
  }

  //obtengo toda la colección de canciones songList
  getSongList() : AngularFirestoreCollection<Song> {

    return this.firestore.collection('songList');

  }

  //Obtengo una canción de la colección songList
  getSong(songId : string):AngularFirestoreDocument<Song>{
    return this.firestore.collection('songList').doc(songId);
  }

  //Borro una canción de la colección songList
  deleteSong(songId : string): Promise<void>{
    return this.firestore.doc('songList/'+songId).delete();
  }
}
