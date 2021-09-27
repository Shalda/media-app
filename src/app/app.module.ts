import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ImageDirective} from './directives/image.directive';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

import {AppComponent} from './app.component';
import {CardComponent} from './components/list-media/card/card.component';
import {ContentComponent} from './components/content.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ControlsComponent} from './components/list-media/controls/controls.component';
import {SingleMediaComponent} from './components/single-media/single-media.component';
import {ListMediaComponent} from './components/list-media/list-media.component';
import { SortByCharPipe } from './pipes/sort-by-char.pipe';
import { FilterMediaPipe } from './pipes/filter-media.pipe';
import {FormsModule} from "@angular/forms";
import { ErrorMessageComponent } from './components/share/error-message/error-message.component';
import { LoaderComponent } from './components/share/loader/loader.component';
import {DragDropModule} from "@angular/cdk/drag-drop";


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
    FilterMediaPipe,
    ErrorMessageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
