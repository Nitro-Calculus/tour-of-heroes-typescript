import { Component, OnInit } from '@angular/core';
import Hero from '../types/hero.type';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  selectedHero : Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
