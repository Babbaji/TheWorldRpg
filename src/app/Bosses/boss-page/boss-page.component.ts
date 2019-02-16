import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-boss-page',
  templateUrl: './boss-page.component.html',
  styleUrls: ['./boss-page.component.css']
})
export class BossPageComponent implements OnInit {

  constructor(private service: ItemsService) { }

  ngOnInit() {
    this.service.getItemsDroppedBy('Poisoned Tree');
  }
}
