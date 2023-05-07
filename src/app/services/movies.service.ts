import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Movie, MovieDTO } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'd33ba7e1bc45df9657b409f5ff9fc828';


  constructor(private http :HttpClient) { }

  getMovies(type:string = 'upcoming', count: number = 20){
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(response => {
      return of(response.results.slice(0, count))
    }))
  }

  getMovie(id : string){
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  searchMovies(page : number){
    return this.http.get<MovieDTO>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(response => {
      return of(response.results)
    }))
  }
}
