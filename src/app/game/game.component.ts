import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  getData(){
    this.apiService.getData();
  }

}
