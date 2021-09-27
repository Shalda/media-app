import {Component, EventEmitter, Output} from '@angular/core';
import {MediaRepositoryService} from "../../../services/media.repository.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  public sortSelector: boolean = false;
  public searchText: string;

  constructor(private _mediaRepository: MediaRepositoryService) {
  }

  public refreshData() {
    this._mediaRepository.updateMediaFromServer();
  }

  @Output() newSortSelectorEvent = new EventEmitter<boolean>();
  @Output() newSearchEvent = new EventEmitter<string>();

  public searchTextChange() {
    this.newSearchEvent.emit(this.searchText);
  }

  public sortChange() {
    this.sortSelector = !this.sortSelector;
    this.newSortSelectorEvent.emit(this.sortSelector);
  }

}
