import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BossesListComponent } from './Bosses/bosses-list/bosses-list.component';
import { TabComponent } from './tab/tab.component';
import { BossCardComponent } from './Bosses/boss-card/boss-card.component';
import { BossDescriptionComponent } from './Bosses/boss-description/boss-description.component';
import { BossPageComponent } from './Bosses/boss-page/boss-page.component';
import { ClassesPageComponent } from './classes-page/classes-page.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { EquipmentListComponent } from './Equipment/equipment-list/equipment-list.component';
import { HomeComponent } from './home/home.component';
import { MaterialListComponent } from './Materials/material-list/material-list.component';
import {ItemsService} from './services/items.service';
import {HttpClientModule} from '@angular/common/http';
import { BossCardRetroComponent } from './Bosses/boss-card-retro/boss-card-retro.component';
import { ReportPageComponent } from './report-page/report-page.component';
import {ReportService} from './services/report.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BossesListComponent,
    TabComponent,
    BossCardComponent,
    BossDescriptionComponent,
    BossPageComponent,
    ClassesPageComponent,
    EquipmentListComponent,
    HomeComponent,
    MaterialListComponent,
    BossCardRetroComponent,
    ReportPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    NgbModalModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'classes', component: ClassesPageComponent},
      {path: 'equipment', component: EquipmentListComponent},
      {path: 'materials', component: MaterialListComponent},
      {path: 'bosses', component: BossesListComponent},
      {path: 'bosses/:bossName', component: BossPageComponent},
      {path: 'report', component: ReportPageComponent},
    ])
  ],
  providers: [ItemsService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
