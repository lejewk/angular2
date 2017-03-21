/**
 * Created by lejewk on 2017-03-21.
 */

import {Component, OnInit} from '@angular/core'
import {Hero} from './hero';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero = null;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit (): void {
    this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
