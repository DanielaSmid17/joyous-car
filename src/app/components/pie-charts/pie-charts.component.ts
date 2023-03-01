import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import users from '../../../assets/dataset/data.json'

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

  //creating different sets of data for 3 different graphs
  
  dataAll: any[] = users;
  dataWomen: any[] = users.filter(user=> user.gender === 'Female');
  dataMen: any[] = users.filter(user=> user.gender === 'Male');

  constructor(){}


  ngOnInit(): void {}




}

