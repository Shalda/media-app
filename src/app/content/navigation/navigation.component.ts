import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ChangeCardsViewService} from "../../common/services/change-cards-view.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  public cardsView: string
  public cardsViewSubscription: Subscription

  constructor(private _cardsViewService: ChangeCardsViewService) {
  }

  public changeView() {
    this._cardsViewService.changView()
  }

  ngOnInit(): void {
    this.cardsViewSubscription = this._cardsViewService.getCardsViewListener()
      .subscribe(view => this.cardsView = view, error => console.log(error))
  }

  ngOnDestroy() {
    this.cardsViewSubscription.unsubscribe()
  }
}
