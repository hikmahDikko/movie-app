import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private moviesService: MoviesService, private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      if(genreId){
        this.genreId = genreId;
        this.getMoviesByGenreId(genreId, 1);
      }else{
        this.getMoviesPage(1);
      }
    })
  }

  getMoviesPage(page: number, search?: string) {
    this.moviesService.searchMovies(page, search).subscribe((movies) => {
      this.movies = movies;
    });
  }

  onPageChange(event: any) {
    const page = event.page + 1;
    if(this.genreId){
      this.getMoviesByGenreId(this.genreId, page)
    }else{
      this.getMoviesPage(page);
    }
  }

  searchChanged(){
    if(this.searchValue){
      this.getMoviesPage(1, this.searchValue);
    }
  }

  getMoviesByGenreId(genreId : string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
