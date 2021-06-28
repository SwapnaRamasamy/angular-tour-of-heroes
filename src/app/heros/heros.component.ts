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
    this.service.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.service.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.service.deleteHero(hero.id).subscribe();
  }

}
