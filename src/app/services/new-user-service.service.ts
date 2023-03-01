import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserServiceService {
constructor() { }

saveNewUser(newUser: any){
  localStorage.setItem('newUser', JSON.stringify(newUser))
  return 'Done!'
}

}
