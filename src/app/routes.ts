import {Route} from '@angular/router';
import {ListMediaComponent} from "./content/list-media/list-media.component";
import {ContentComponent} from "./content/content.component";
import {SingleMediaComponent} from "./content/single-media/single-media.component";


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
