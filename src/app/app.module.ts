import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BossesListComponent } from './bosses-list/bosses-list.component';
import { HttpModule } from '@angular/http';
import { TabComponent } from './tab/tab.component';
import { BossCardComponent } from './boss-card/boss-card.component';
import { BossDescriptionComponent } from './boss-description/boss-description.component';
import { BossPageComponent } from './boss-page/boss-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    BossesListComponent,
    TabComponent,
    BossCardComponent,
    BossDescriptionComponent,
    BossPageComponent,
    ItemPageComponent,
    ClassesPageComponent,
    ItemListComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', component: DatatableComponent},
      { path: 'classes', component: ClassesPageComponent},
      { path: 'items', component: ItemListComponent},
      { path: 'bosses', component: BossesListComponent},
      { path: 'bosses/:bossName', component: BossPageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
