import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models';

export interface Countries {
  name: string;
  count: number;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit{

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['country', 'count']
  // dataSource: Countries[] = [];
  @Input() users: User[] = [];

  //creating data for purchased cars by country table
  generateData(){
    const countries: any = {};
    const countryArray: any[] = [];
    for (const user of this.users){
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
