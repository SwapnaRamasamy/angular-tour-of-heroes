import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes:Hero[] = [];
  selectedHero?:Hero;
  constructor(private service:HeroService ) { }

  ngOnInit(): void {
    this.getHeros();
  }
  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  getHeros():void{
    this.service.getHeros().subscribe(heroes => this.heroes = heroes);
  }

}
