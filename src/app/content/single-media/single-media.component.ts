import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../../common/services/navigation.service";
import {MediaRepositoryService} from "../../model/media.repository.service";
import {IMedia} from "../../model/media.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-one-media',
  templateUrl: './single-media.component.html',
  styleUrls: ['./single-media.component.css']
})
export class SingleMediaComponent implements OnInit {
  public media: IMedia;
  public id: string;
  public routeSubscription: Subscription;

  constructor(private _navigation: NavigationService, private _mediaRepository: MediaRepositoryService, private _route: ActivatedRoute,) {
  }

  public getMedia() {
    let newMedia = this._mediaRepository.getMediaById(this.id)
    console.log(newMedia);
    if (newMedia) {
      this.media = newMedia
    }
  }

  ngOnInit(): void {
    this.routeSubscription = this._route.params.subscribe(param => {
        if (param.id) {
          console.log(param.id)
          this.id = param.id;
          this.getMedia()
        }
      }
    )
  }

  back(): void {
    this._navigation.back()
  }

}
