import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pie-by-seats',
  templateUrl: './pie-by-seats.component.html',
  styleUrls: ['./pie-by-seats.component.css']
})

export class PieBySeatsComponent implements OnInit{
  @Input() data: any[] = [];
  results: any[] = [];
  view = [300, 300];
  
  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  
  colorScheme: any = {
    domain: ['#F23869', '#3621BF', '#BF34B6', '#0F8AA6', '#FFBA10', '#5657FF']
  };

  aggregateData(users: any){
    // initializing dataser
    const aggregatedData = {
      "2 seats": 0,
      "3 seats": 0,
      "4 seats": 0,
      "5 seats": 0,
      "6 seats": 0,
      "7 seats": 0,
    }
    //adding data by seats amount
    for(const user of users){
      const seats = user.seats
      if ( seats === 2){
        this.addToSeats(aggregatedData, "2 seats")
      } else if ( seats === 3){
        this.addToSeats(aggregatedData, "3 seats")
      } else if ( seats === 4){
        this.addToSeats(aggregatedData, "4 seats")
      } else if ( seats === 5){
        this.addToSeats(aggregatedData, "5 seats")
      } else if ( seats === 6){
        this.addToSeats(aggregatedData, "6 seats")
      } else if ( seats === 7){
        this.addToSeats(aggregatedData, "7 seats")
      }
    }

    return aggregatedData
  }

  addToSeats(dataset: any, seatsString: string) {
      dataset[seatsString] = dataset[seatsString] + 1
  }

  //finalizing dataset
  formatData(aggregatedData: any){
    const formattedData = []
    for (const label in aggregatedData){
      formattedData.push({name: label, value: aggregatedData[label]})
    }

    return formattedData
  }

  //assigning results to graph
  constructor() {
    Object.assign(this, ...this.results);

  }


  ngOnInit(){
   const aggregatedData = this.aggregateData(this.data)
   this.results = this.formatData(aggregatedData)
    
 }


}
