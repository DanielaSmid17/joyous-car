import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserServiceService {
constructor() { }

saveNewUser(newUser: any){
  const dataset = localStorage.getItem('dataset')
  if(dataset){
    const datasetArray = JSON.parse(dataset)
    datasetArray.push(newUser)
    localStorage.setItem('dataset', JSON.stringify(datasetArray))
    return 'Done!'
  }

  return('Not done!')
}

}
