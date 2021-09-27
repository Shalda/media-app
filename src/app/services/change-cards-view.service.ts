import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChangeCardsViewService {
  private view = new BehaviorSubject<string>('grid')

  constructor() {
  }

  changeView() {
    const value: string = this.view.getValue()
    if (!value) return
    (value === 'list') ? this.view.next('grid') : this.view.next('list')
  }

  getCardsViewListener(): Observable<string> {
    return this.view.asObservable()
  }
}
