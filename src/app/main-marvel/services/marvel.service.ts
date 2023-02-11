import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Marvel, Result } from '../interface/marvel.interface';
import { Comic, Comics } from '../interface/comic.interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private publicApiKey = '9dd1d40a7a5aabe268cff92458e4085d';
  private privateApiKey = '4127e15eebd7f7fbce16b5ef4898b7bb071d5245'
  private hashApiKey = '1936147d28fcb174e7d61f9dc74621cd';

  public resultados: Result[] = [];
  public comics: Comics[] = [];

  constructor(private http: HttpClient) { }

  obtenerResultados(){
    this.http.get<Marvel>(`https://gateway.marvel.com/v1/public/characters?limit=50&ts=123&apikey=9dd1d40a7a5aabe268cff92458e4085d&hash=1936147d28fcb174e7d61f9dc74621cd`)
      .subscribe((resp) => {
        this.resultados = resp.data.results;
      })
  }

  obtenerComics(){
    this.http.get<Comic>(`https://gateway.marvel.com/v1/public/comics?ts=123&startYear=2000&orderBy=focDate&limit=50&apikey=9dd1d40a7a5aabe268cff92458e4085d&hash=1936147d28fcb174e7d61f9dc74621cd`)
      .subscribe((resp) => {
        this.comics = resp.data.results;
      })
  }
}
