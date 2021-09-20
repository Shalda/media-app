import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MediaRepositoryService} from "../../../model/media.repository.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  public sortSelector: boolean = false;
  public searchText: string;

  constructor(private _mediaRepository: MediaRepositoryService) {
  }

  public refreshData() {
    this._mediaRepository.updateMediaFromServer();
  }

  @Output() newSortSelectorEvent = new EventEmitter<boolean>();
  @Output() newSearchEvent = new EventEmitter<string>();

  public searchTextChange(ev?: Event) {
    this.newSearchEvent.emit(this.searchText);
  }

  public sortChange() {
    this.sortSelector = !this.sortSelector;
    this.newSortSelectorEvent.emit(this.sortSelector);
  }

  ngOnInit(): void {
  }

}
