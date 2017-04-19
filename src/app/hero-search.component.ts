/**
 * Created by lejewk on 2017-03-27.
 */

import { Component, OnInit } from '@angular/core';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Router }            from '@angular/router';

@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
    private searchTerms = new Subject<string>();
    heroes: Observable<Hero[]>;

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                    ? this.heroSearchService.search(term)
                    : Observable.of<Hero[]>([])
            )
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            })
    }

    search(term: string) :void {
        this.searchTerms.next(term);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}