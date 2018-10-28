import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { YoutubesearchComponent } from './youtubesearch/youtubesearch.component';
import { SearchResultComponent } from './youtubesearch/search-result.component';
import { SearchBoxComponent } from './youtubesearch/search-box.component';
import {youTubeSearchInjectables} from './youtubesearch/youtubesearch.injectables';


@NgModule({
  declarations: [
    AppComponent,
    YoutubesearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
