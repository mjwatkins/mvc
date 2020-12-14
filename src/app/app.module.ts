import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavModule } from './nav/nav.module';
import { MapModule } from './map/map.module';
import { VideosModule } from './videos/videos.module';
import { LeadershipModule } from './leadership/leadership.module';
import { GivingModule } from './giving/giving.module';
import { SisterChurchesModule } from './sister-churches/sister-churches.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NavModule,
    MapModule,
    VideosModule,
    LeadershipModule,
    GivingModule,
    SisterChurchesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
