import { Component, OnInit } from '@angular/core';
import {BossesService} from '../../services/bosses.service';

@Component({
  selector: 'app-bosses-list',
  templateUrl: './bosses-list.component.html',
  styleUrls: ['./bosses-list.component.css']
})
export class BossesListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
