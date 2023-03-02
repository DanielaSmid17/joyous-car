import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models';


@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

  //creating different sets of data for 3 different graphs
  @Input() users: User[] = [];
  
  dataAll: any[] = this.users;
  dataWomen: any[] = this.users.filter(user=> user.gender === 'Female');
  dataMen: any[] = this.users.filter(user=> user.gender === 'Male');

  constructor(){}


  ngOnInit(){
    this.dataAll = this.users;
    this.dataWomen = this.users.filter(user=> user.gender === 'Female');
    this.dataMen = this.users.filter(user=> user.gender === 'Male');
    
  }




}

