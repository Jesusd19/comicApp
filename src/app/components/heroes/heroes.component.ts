
import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from 'src/app/services/heroe_interface';

import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroesServices: HeroesService,
    private route: Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHero(ident: number) {
    this.route.navigate(['/hero', ident]);
  }

}
