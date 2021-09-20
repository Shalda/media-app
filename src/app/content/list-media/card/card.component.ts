import {Component, Input, OnInit} from '@angular/core';
import {IMedia} from "../../../model/media.model";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public errorImg: string = '/assets/img/placeholder.png';

  constructor() {
  }
  @Input() media?: IMedia;
  @Input() cardView: string = 'list';

  ngOnInit(): void {

  }


}
