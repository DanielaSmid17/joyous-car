import { Component } from '@angular/core';
import { User } from 'src/app/models';
import { NewUserServiceService } from 'src/app/services/new-user-service.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'car-pref-form',
  templateUrl: './car-pref-form.component.html',
  styleUrls: ['./car-pref-form.component.css']
})
export class CarPrefFormComponent {
  user!: User

  genders: any[] = [
    {id: 0, label: 'Female'},
    {id: 1, label: 'Male'},
    {id: 2, label: 'Other'},
    {id: 3, label: 'Prefer not to answer'},
  ]

  hobbies: any[] = [
    {id: 0, label: 'Gardening', selected: false},
    {id: 1, label: 'Board Games', selected: false},
    {id: 2, label: 'Hiking', selected: false},
    {id: 3, label: 'Coding', selected: false},
    {id: 4, label: 'Cooking', selected: false},
    {id: 5, label: 'Playing music', selected: false},
    {id: 6, label: 'Sports', selected: false},
  ]

  //snackbar vars
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public service: NewUserServiceService, private snackbar: MatSnackBar){
  }
 
  //calculating 18 years ago
  subtractYears(date: any, years: number) {
    date.setFullYear(date.getFullYear() - years);
    return date;
  }

  maxDate = this.subtractYears(new Date(), 18)


  //handle hobbies checkbox
  onChangeHobbies($event: any){
    const id = $event.target.value;
    this.hobbies = this.hobbies.map((d)=> {
      if(d.id == id)
      {
        d.selected = !d.selected
      }
      return d
    }) 

      

  }

  //submitting form, calling service
  submit(form: any){
    this.user = form.value
    const selectedHobbies = this.hobbies.filter(hobbie => hobbie.selected);
    this.user.hobbies = selectedHobbies
    const newUserSaved = this.service.saveNewUser(this.user)
    if (newUserSaved === 'Done!'){
      this.openSnackBar('Information saved, you will receive an email with you car match!')
      form.resetForm()
    }

    else {
      this.openSnackBar('User not saved, try later!')
    }
  }

  //opening message
  openSnackBar(message: string) {
    this.snackbar.open(message, 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000
    });
  }
  


  ngOnInit(): void{}

  


}
