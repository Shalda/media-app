import {Route} from '@angular/router';
import {ListMediaComponent} from "./components/list-media/list-media.component";
import {ContentComponent} from "./components/content.component";
import {SingleMediaComponent} from "./components/single-media/single-media.component";

export const routes: Route[] = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {path: 'category/:name', component: ListMediaComponent},
      {path: ':id', component: SingleMediaComponent},
      {path: '', component: ListMediaComponent},
    ],
  },
  {
    path: '**',
    component: ListMediaComponent
  }
];
