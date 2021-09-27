import {Injectable} from '@angular/core';
import {map} from "rxjs/operators"
import {Subject} from "rxjs";

import {ICategory, IMedia} from "../model/media.model";
import {RestDataSourceService} from "./rest.datasource.service";

@Injectable({
  providedIn: 'root'
})
export class MediaRepositoryService {
  private media: IMedia[] = [];
  private mediaCategories: ICategory = {};
  public error = new Subject<string | null>();
  public loading = new Subject<boolean>();

  constructor(private _dataSource: RestDataSourceService) {
    this.updateMediaFromServer()
  }

  public updateMediaFromServer() {
    this.loading.next(true)
    this._dataSource.getAllMedia().pipe(
      map(data => data.results),
    ).subscribe(mediaResults => {
        this.mediaCategories = MediaRepositoryService._createCategory(mediaResults);
        this.media = this._createUpdMedia(mediaResults);
        this.loading.next(false);
      },
      () => this.error.next('Network problems, please try again later'))
  }

  private _createUpdMedia(responseData: IMedia[]) {
    return responseData.map(media => {
      media['Year'] = MediaRepositoryService._convertDate(media['Year'] as string)
      return media
    })
  }

  private static _convertDate(val: string) {
    const dateString = val;
    const year = +dateString.substring(0, 4);
    const month = +dateString.substring(4, 6);
    const day = +dateString.substring(6, 8);
    return new Date(year, month - 1, day);
  }

  private static _createCategory(arr: IMedia[]): ICategory {
    return arr.reduce((acc: ICategory, cur: IMedia) => {
      acc[cur.Type] = (acc[cur.Type] || 0) + 1
      return acc;
    }, {})
  }

  public getMedia() {
    return [...this.media];
  }

  public getCategory() {
    return {...this.mediaCategories};
  }

  public getMediasByCategory(name: string) {
    return this.media.filter(p => name === p.Type);
  }

  public getMediaById(id: string) {
    this.loading.next(true);
    return this._dataSource.getAllMedia().pipe(
      map(media => {
        return (media.results).filter((media: IMedia) => media.imdbID === id)
      }),
      map((media: IMedia[]) => {
        media[0]['Year'] = MediaRepositoryService._convertDate(media[0]['Year'] as string)
        return media[0]
      }))
  }
}

