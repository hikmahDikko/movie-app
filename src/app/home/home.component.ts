import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularMovies: Movie[] = [];
  upComingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesServices : MoviesService){}

  ngOnInit() : void{
    this.moviesServices.getMovies('popular').subscribe((movies)=> {
      this.popularMovies = movies;
    });

    this.moviesServices.getMovies('top_rated').subscribe((movies)=> {
      this.topRatedMovies = movies;
    });

    this.moviesServices.getMovies('upcoming').subscribe((movies)=> {
      this.upComingMovies = movies;
    });
  }
}
