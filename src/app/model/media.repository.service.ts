import {Injectable} from '@angular/core';
import {ICategory, IMedia} from "./media.model";
import {map} from "rxjs/operators"
import {RestDataSourceService} from "./rest.datasource.service";

@Injectable({
  providedIn: 'root'
})
export class MediaRepositoryService {
  private media: IMedia[] = [];
  private mediaCategories: ICategory = {};

  constructor(private dataSource: RestDataSourceService) {
    this.updateMediaFromServer()
  }

  public updateMediaFromServer() {
    this.dataSource.getAllMedia().pipe(
      map(data => data.results),
    ).subscribe(mediaResults => {
        this.mediaCategories = this._createCategory(mediaResults);
        this.media = this._createUpdMedia(mediaResults);
      },
      error => console.log(error))
  }

  private _createUpdMedia(responseData: IMedia[]) {
    return responseData.map(media => {
      media['Year'] = this._convertDate(media['Year'] as string)
      return media
    })
  }

  private _convertDate(val: string) {
    const dateString = val;
    const year = +dateString.substring(0, 4);
    const month = +dateString.substring(4, 6);
    const day = +dateString.substring(6, 8);
    return new Date(year, month - 1, day);
  }

  private _createCategory(arr: IMedia[]): ICategory {
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
    if (this.media.length <= 0) {
      console.log('here')
      this.updateMediaFromServer()
      return this.media.find(media => media.imdbID === id)
    }
    return this.media.find(media => media.imdbID === id)
  }
}

