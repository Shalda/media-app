import {Injectable} from '@angular/core';
import {IMedia} from "./media.model";
import {map} from "rxjs/operators"
import {RestDataSourceService} from "./rest.datasource.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MediaRepositoryService {
  private media = new Subject<IMedia[]>();

  constructor(private dataSource: RestDataSourceService) {
    dataSource.getAllMedia().pipe(
      map(data => data.results)
    ).subscribe(mediaResults => {
        this.media.next(mediaResults)
      },
      error => console.log(error))
  }

  public getMediaListener() {
    return this.media.asObservable();
  }
}

