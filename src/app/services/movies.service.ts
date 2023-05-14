import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Movie, MovieCredits, MovieDTO, MovieImages, MovieVideoDTO } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDTO } from '../models/genres';

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

  getMovieVideos(id:string){
    return this.http.get<MovieVideoDTO>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(switchMap(response => {
      return of(response.results)
    }))
  }

  getMovieImages(id : string){
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
  }

  getMovieCredits(id: string){
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMoviesGenres(){
    return this.http.get<GenresDTO>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
    .pipe(switchMap(response => {
      return of(response.genres)
    }))
  }
  
}
