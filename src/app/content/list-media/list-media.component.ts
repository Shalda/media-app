import {Component, OnDestroy, OnInit} from '@angular/core';
import {IMedia} from "../../model/media.model";
import {MediaRepositoryService} from "../../model/media.repository.service";
import {Subscription} from "rxjs";
import {ChangeCardsViewService} from "../../common/services/change-cards-view.service";

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit, OnDestroy {
  public mediaContent: IMedia[] = [];
  public cardViewChanger: string = "list";
  public mediaSubscription: Subscription;
  public cardViewSubscription: Subscription;

  constructor(
    private _mediaRepository: MediaRepositoryService,
    private _cardViewService: ChangeCardsViewService) {
  }
  public getClassMap(){
    return {
      "row-cols-sm-2 row-cols-md-3 row-cols-lg-4": this.cardViewChanger == "list"
    };
  }

  ngOnInit(): void {
    this.mediaSubscription = this._mediaRepository.getMediaListener()
      .subscribe(data => this.mediaContent = data);
    this.cardViewSubscription = this._cardViewService.getCardsViewListener()
      .subscribe(view => this.cardViewChanger = view, error => console.log(error));
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
    this.cardViewSubscription.unsubscribe();
  }
}
