import {Component, Input, OnInit} from '@angular/core';

import {MediaRepositoryService} from "../../../services/media.repository.service";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  constructor(private _mediaRepository: MediaRepositoryService) {
  }

  ngOnInit(): void {
  }

  public errorHandler() {
    this._mediaRepository.error.next(null);
    this._mediaRepository.loading.next(false)
  }

  @Input() errorMsg: string | null = null
}
