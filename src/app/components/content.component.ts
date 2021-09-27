import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {MediaRepositoryService} from "../services/media.repository.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  public loadingSubscription: Subscription
  public isLoading: boolean = false;

  constructor(private _mediaRepository: MediaRepositoryService) {
  }

  ngOnInit(): void {
    this.loadingSubscription = this._mediaRepository.loading.subscribe(loader =>
      this.isLoading = loader
    )
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe()
  }
}
