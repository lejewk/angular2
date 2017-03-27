/**
 * Created by lejewk on 2017-03-21.
 */

import {Component, OnInit} from '@angular/core'
import {Hero} from './hero';
import {ActivatedRoute} from '@angular/router';
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

  async ngOnInit () {
    let id = await this.route.params['value'].id;
    this.hero = await this.heroService.getHero(+id);
  }

  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
