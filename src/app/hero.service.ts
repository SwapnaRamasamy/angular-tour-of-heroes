import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService: MessageService) {
  }
  getHeros():Observable<Hero[]>{
    this.msgService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
