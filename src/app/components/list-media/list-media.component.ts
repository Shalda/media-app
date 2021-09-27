import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

import {IMedia} from "../../model/media.model";
import {ChangeCardsViewService} from "../../services/change-cards-view.service";
import {MediaRepositoryService} from "../../services/media.repository.service";

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit, OnDestroy {
  public mediaContent: IMedia[] = [];
  public cardViewChanger: string = "list";
  public cardViewSubscription: Subscription;
  public routeSubscription: Subscription;
  public category: string;
  public sortSelector: boolean = false;
  public searchText: string = '';

  constructor(
    private _mediaRepository: MediaRepositoryService,
    private _cardViewService: ChangeCardsViewService,
    private _route: ActivatedRoute,
  ) {
  }

  public changeSortSelector(sortValue: boolean) {
    this.sortSelector = sortValue;
  }

  public get media() {
    if (this.category === undefined) {
      this.mediaContent = this._mediaRepository.getMedia();
    } else {
      this.mediaContent = this._mediaRepository.getMediasByCategory(this.category);
    }
    return this.mediaContent;
  }

  public getClassMap() {
    return {
      "row-cols-sm-2 row-cols-md-3 row-cols-lg-4": this.cardViewChanger == "list"
    };
  }

  ngOnInit(): void {
    this.routeSubscription = this._route.params.subscribe(param => {
        if (param.name && param.name !== this.category) {
          this.category = param.name;
          this.media;
        }
      }
    )
    this.cardViewSubscription = this._cardViewService.getCardsViewListener()
      .subscribe(view => this.cardViewChanger = view, error => console.log(error));
  }

  ngOnDestroy() {
    this.cardViewSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
