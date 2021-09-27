import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

import {IMedia} from "../../model/media.model";
import {NavigationService} from "../../services/navigation.service";
import {MediaRepositoryService} from "../../services/media.repository.service";

@Component({
  selector: 'app-one-media',
  templateUrl: './single-media.component.html',
  styleUrls: ['./single-media.component.css']
})
export class SingleMediaComponent implements OnInit {
  public media: IMedia;
  public id: string;
  public routeSubscription: Subscription;
  public editMode: boolean = false;
  public sameTitle: boolean = false;
  public errorSubscription: Subscription;

  constructor(private _navigation: NavigationService,
              private _mediaRepository: MediaRepositoryService,
              private _route: ActivatedRoute,) {
  }

  public editModeSwitcher() {
    this.editMode = !this.editMode;
  }

  public getMedia() {
    this._mediaRepository.getMediaById(this.id).subscribe(
      (media: IMedia) => {
        this.media = media;
        this._mediaRepository.loading.next(false)
      }, () => this._mediaRepository.error.next("Network problems, please try again later")
    )
  }

  public submitForm(form: NgForm) {
    if (form.invalid || form.value.title === this.media.Title) {
      this.sameTitle = true;
      return
    }
    this.media.Title = form.value.title;
    //here changing api call
    this.sameTitle = false;
    this.editMode = false;
    form.resetForm()
  }

  ngOnInit(): void {
    this.routeSubscription = this._route.params.subscribe(param => {
        if (param.id) {
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
