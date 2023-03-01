import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user!: User;
  date = new Date()

  constructor(){}
  
  // bringing user from local storage in case we want to use it
  ngOnInit(): void {
    const userSaved = localStorage.getItem('newUser')
    if(userSaved)
      this.user = JSON.parse(userSaved)
  }

}
