import { OnInit, Input } from '@angular/core';
import { Component } from '@angular/core';
import { User } from 'src/app/models';
@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  //initializing dataset
  @Input() users: User[] = [];
  
  aggregatedData : any = {
    "18 to 30": {},
    "31 to 45": {},
    "46 to 60": {},
    "61 +": {},
  }
  windowSizeSm = window.matchMedia("(max-width: 720px)")
  // graph options
  results: any[] = [];
  view : number[] = this.windowSizeSm.matches ? [400, 200] : [700, 400]; 
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Group Range';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Values';
  legendTitle: string = 'Motor Types';
  colorScheme: any = {
  domain: ['#3621BF', '#F23869', '#FFFFFF']
  };
  
  constructor() {
    //assigning results to graph
    Object.assign( this, ...this.results )
  }


  ngOnInit(): void {
    this.aggregateData()
  }

  //creating data object for each age group
  aggregateData(){
    for(const user of this.users){
      const age = this.calcAge(user.birthdate) 
      if (age >= 18 && age < 30){
        this.addToRange("18 to 30", user.motor)
      } else if (age >= 31 && age < 45){
        this.addToRange("31 to 45", user.motor)
      } else if (age >= 46 && age < 60){
        this.addToRange("46 to 60", user.motor)
      } else if (age >= 61){
        this.addToRange("61 +", user.motor)
      }
    }
    this.formatData()
    

  }
  // calculating age for each user
  calcAge(dateString: string) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  //adding motor preference by user
  addToRange(range: string, motor: string) {
    if (!(motor in this.aggregatedData[range])){
      this.aggregatedData[range][motor] = 1
    } else {
      this.aggregatedData[range][motor] = this.aggregatedData[range][motor] + 1
    }



  }
  // finalizing data format and assigning to results
  formatData(){
    const formattedData: any[] = [];
    for (const range in this.aggregatedData){
      const counts = this.aggregatedData[range]
      const formattedRange = {
          "name": range,
          "series": [
            {
              "name": "Fuel",
              "value": counts['Fuel']
            },
            {
              "name": "Electric",
              "value": counts['Electric']
            }
          ]
        }
        formattedData.push(formattedRange)
      }

    this.results = formattedData
    
  }






}
