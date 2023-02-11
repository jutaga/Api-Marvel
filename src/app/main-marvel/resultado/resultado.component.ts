import { Component } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  get resultados(){
    return this.marvelService.resultados;
  }

  get comics(){
    return this.marvelService.comics;
  }

  constructor(private marvelService: MarvelService){
    this.marvelService.obtenerResultados();
    this.marvelService.obtenerComics();
  }


}
