import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {NavigationComponent} from './content/navigation/navigation.component';
import {ControlsComponent} from './content/list-media/controls/controls.component';
import {CardComponent} from './content/list-media/card/card.component';
import {OneMediaComponent} from './content/one-media/one-media.component';
import {ListMediaComponent} from './content/list-media/list-media.component';
import {HttpClientModule} from "@angular/common/http";
import { ImageDirective } from './common/directives/image.directive';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavigationComponent,
    ControlsComponent,
    CardComponent,
    OneMediaComponent,
    ListMediaComponent,
    ImageDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
