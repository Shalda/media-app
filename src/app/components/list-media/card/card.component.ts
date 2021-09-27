import {Component, Input, OnInit} from '@angular/core';

import {IMedia} from "../../../model/media.model";
import {MediaRepositoryService} from "../../../services/media.repository.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public errorImg: string = '/assets/img/placeholder.png';

  constructor(private _mediaService: MediaRepositoryService) {
  }

  @Input() media?: IMedia;
  @Input() cardView: string = 'list';

  public onImg() {
    this._mediaService.loading.next(true);
  }

  ngOnInit(): void {

  }


}
