import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ImageDirective} from './common/directives/image.directive';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

import {AppComponent} from './app.component';
import {CardComponent} from './content/list-media/card/card.component';
import {ContentComponent} from './content/content.component';
import {NavigationComponent} from './content/navigation/navigation.component';
import {ControlsComponent} from './content/list-media/controls/controls.component';
import {SingleMediaComponent} from './content/single-media/single-media.component';
import {ListMediaComponent} from './content/list-media/list-media.component';
import { SortByCharPipe } from './common/pipes/sort-by-char.pipe';
import { FilterMediaPipe } from './common/pipes/filter-media.pipe';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    ControlsComponent,
    CardComponent,
    SingleMediaComponent,
    ListMediaComponent,
    ImageDirective,
    SortByCharPipe,
    FilterMediaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
