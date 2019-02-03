import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BossesListComponent } from './bosses-list/bosses-list.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BossesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
