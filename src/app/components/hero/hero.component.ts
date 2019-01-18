import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(
    private route: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.route.params.subscribe(params => {  
            
      this.hero = this._heroesService.getHero(params['id'])[0];
      
    })
  }

  ngOnInit() {
  }

}
