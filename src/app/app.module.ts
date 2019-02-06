import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BossesListComponent } from './bosses-list/bosses-list.component';
import {HttpModule} from '@angular/http';
import { TabComponent } from './tab/tab.component';
import { BossCardComponent } from './boss-card/boss-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BossesListComponent,
    TabComponent,
    BossCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
