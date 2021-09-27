import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaRepositoryService} from "./services/media.repository.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'media-app';
  public errorSubscription: Subscription;
  public error: null | string = null;

  constructor(private _mediaRepository: MediaRepositoryService) {
  }

  ngOnInit() {
    this.errorSubscription = this._mediaRepository.error.subscribe(erMessage =>
    this.error = erMessage)
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe()
  }
}
