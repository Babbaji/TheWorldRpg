import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-boss-page',
  templateUrl: './boss-page.component.html',
  styleUrls: ['./boss-page.component.css']
})
export class BossPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
          const bossName = +params.get('bossName');
        console.log(bossName);
        }
      );
  }
}
