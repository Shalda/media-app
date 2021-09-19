import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChangeCardsViewService {
private view = new BehaviorSubject<string>('list')
  constructor() { }
  changView(){
  const value: string =  this.view.getValue()
    if(!value) return
   (value === 'list')? this.view.next('grid') : this.view.next('list')
  }
  getCardsViewListener(){
  return this.view.asObservable()
  }
}
