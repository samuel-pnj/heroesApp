import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  id: string = '';

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {

    
    this.activatedRoute.params
    .subscribe(({id}) => console.log( id ));

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
    ).subscribe( heroe => this.heroe = heroe);
    
  }

}
