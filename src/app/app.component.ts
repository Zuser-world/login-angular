import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juan-pages';

  constructor(private firestore: Firestore){

  }
  altaUsuario(){
    
  }
}
