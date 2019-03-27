import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  data: [{playerNum: number}, {numOfQuestions: number}, {difficulty: string}, {category: string}];

  constructor(private afs: AngularFirestore) {
  }

  saveData(data){
    this.data = data;
  }
}
