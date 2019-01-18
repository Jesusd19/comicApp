import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {

  heros: any = [];
  heroSearch: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private route: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroSearch = params['name'];      
      this.heros = this._heroesService.searchHeroes(params['name']);
    });
   }

  ngOnInit() {

  }

  verHero(ident: number) {
    this.route.navigate(['/hero', ident]);
  }

}
