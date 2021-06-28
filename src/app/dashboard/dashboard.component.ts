import { Component, OnInit } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[] = [];
  constructor(private service: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.service.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
