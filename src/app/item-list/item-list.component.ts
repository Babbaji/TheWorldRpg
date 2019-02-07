import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {ItemsService} from '../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private service: ItemsService
    ) { //private service: GithubFollowersService
  }

  ngOnInit() {
    this.service.getRings()
      .subscribe((response) => {
        console.log(response.json());
      });


    /*combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe((combined) => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');
        // this.service.getAll()
        // .subscribe(followers => this.followers = followers);
      }
    );*/
  }

}
