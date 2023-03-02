import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import data from '../assets/dataset/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}
  //inititalizing dataset in local storage
  ngOnInit(){
    localStorage.setItem('dataset', JSON.stringify(data))
  }


}
