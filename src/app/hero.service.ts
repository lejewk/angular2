/**
 * Created by lejewk on 2017-03-21.
 */

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeros(): Hero[] {
    return HEROES;
  }
}
