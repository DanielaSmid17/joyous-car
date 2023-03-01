import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import users from '../../../assets/dataset/data.json'

export interface Countries {
  name: string;
  count: number;
}

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit{
  displayedColumns: string[] = ['Country', 'Cars Purchased']
  dataSource: Countries[] = [];

  //creating data for purchased cars by country table
  generateData(){
    const countries: any = {};
    const countryArray: any[] = [];
    for (const user of users){
      if(!(user.location in countries))
        countries[user.location] = 1
      else  
        countries[user.location] = countries[user.location] + 1
    }

    for (const country in countries){
      countryArray.push({name: country, count: countries[country]})

    }
    const topArray = countryArray.sort((a,b)=> b.count - a.count).splice(0, 15)
    this.dataSource = topArray;
  }

  constructor(){}
  
  ngOnInit(): void {
    this.generateData() 
  }

}
