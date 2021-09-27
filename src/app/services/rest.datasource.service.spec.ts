import {RestDataSourceService} from "./rest.datasource.service";
import {IMedia} from "../model/media.model";
import {of} from "rxjs";
// import {HttpErrorResponse} from "@angular/common/http";

describe('RestDataSourceService', () => {
  const data: { results: IMedia[], totalResults: string } = {
    "results": [
      {
        "Title": "Back to the Future",
        "Year": "19850205 ",
        "imdbID": "tt0088763",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "Back to the Future... The Ride",
        "Year": "19910320",
        "imdbID": "tt0101392",
        "Type": "movie",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2OTc3NWQtODc0Mi00NDQxLTkwZDItY2U4ZTJjMDFiMzlmXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
      },
      {
        "Title": "Back to the Future",
        "Year": "19910408",
        "imdbID": "tt0101042",
        "Type": "series",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTE5OTYzNjUzMV5BMl5BanBnXkFtZTcwNzczMzEzMQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Back to the Future: The Game - Episode 1, It's About Time",
        "Year": "20100108",
        "imdbID": "tt1688659",
        "Type": "game",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BYmJkM2U1NTktZDQ4Ny00YzllLWE3YzMtMGIwMTlkZjI4YTE2XkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_SX300.jpg"
      },
    ],
    "totalResults": '4',
  }
  let restDataService: RestDataSourceService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });
  it('should return all media', (done: DoneFn) => {
    restDataService = new RestDataSourceService(httpClientSpy as any);
    httpClientSpy.get.and.returnValue(of(data));
    restDataService.getAllMedia().subscribe(
      media => {
        expect(media).toEqual(data, 'expected heroes');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  //
  // it('should return an error when the server returns a 404', (done: DoneFn) => {
  //   restDataService = new RestDataSourceService(httpClientSpy as any);
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });
  //
  //   httpClientSpy.get.and.returnValue(of(errorResponse));
  //
  //   restDataService.getAllMedia().subscribe(
  //     media => done.fail('expected an error, not media'),
  //     error  => {
  //       expect(error.message).toContain('test 404 error');
  //       done();
  //     }
  //   );
  // });
  //
})


