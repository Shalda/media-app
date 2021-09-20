import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ChangeCardsViewService} from "../../common/services/change-cards-view.service";
import {MediaRepositoryService} from "../../model/media.repository.service";
import {ICategory} from "../../model/media.model";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  public cardsView: string;
  public categories: ICategory;
  public cardsViewSubscription: Subscription;
  public categoriesSubscription: Subscription;

  constructor(
    private _cardsViewService: ChangeCardsViewService,
    private _mediaRepository: MediaRepositoryService,
   ) {

  }
  public getCategories(){
    this.categories = this._mediaRepository.getCategory();
    return this.categories
  }

  public changeView() {
    this._cardsViewService.changView()
  }

  ngOnInit(): void {
    this.cardsViewSubscription = this._cardsViewService.getCardsViewListener()
      .subscribe(view => this.cardsView = view, error => console.log(error));
  }

  ngOnDestroy() {
    this.cardsViewSubscription.unsubscribe();
    this.categoriesSubscription.unsubscribe();
  }
}
