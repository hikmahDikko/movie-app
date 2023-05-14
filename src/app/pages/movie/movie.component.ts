import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie, MovieCredits, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieVideos : MovieVideo[] = [];
  movieCredits : MovieCredits | null = null;
  movieImages : MovieImages | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id)
      this.getMovieImages(id)
      this.getMovieCredits(id)
    });
  }
  
  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id : string){
    this.moviesService.getMovieVideos(id).subscribe(movieVideoData => {
      this.movieVideos = movieVideoData;
    })
  }

  getMovieImages(id : string){
    this.moviesService.getMovieImages(id).subscribe(movieImageData => {
      this.movieImages = movieImageData;
    })
  }

  getMovieCredits(id : string){
    this.moviesService.getMovieCredits(id).subscribe(movieCreditData => {
      this.movieCredits = movieCreditData;
    })
  }
}
