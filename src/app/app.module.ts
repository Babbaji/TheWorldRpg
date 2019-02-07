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
import { DataTablesModule } from 'angular-datatables';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { HomeComponent } from './home/home.component';

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
    EquipmentListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'classes', component: ClassesPageComponent},
      { path: 'equipment', component: EquipmentListComponent},
      { path: 'bosses', component: BossesListComponent},
      { path: 'bosses/:bossName', component: BossPageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
