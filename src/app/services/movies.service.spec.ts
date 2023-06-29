import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService,
      httpTestingController : HttpTestingController;
  const genreId = "action"
  let page = 1;
  const id = "536437";
  const searchValue = "/search/movie";
  const url = searchValue ? '/search/movie' : '/movie/popular';
     

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientTestingModule],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create a component', () => {
    expect(service).toBeTruthy();
  });

  it('should get all movies', () => {
    service.getMoviesGenres().subscribe(movies => {
      expect(movies).toBeTruthy("No movies were found");
      expect(movies.length).toBeGreaterThan(0);
    });
    const req = httpTestingController.expectOne('https://api.themoviedb.org/3/genre/movie/list?api_key=d33ba7e1bc45df9657b409f5ff9fc828')
    expect(req.request.method).toBe('GET')
  });

  it('should get a movie', () => {
      service.getMovie(id).subscribe(movie => {
        expect(movie).toBeTruthy("No movie was found");
      })
      const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movie/536437?api_key=d33ba7e1bc45df9657b409f5ff9fc828');
      expect(req.request.method).toBe('GET');
  });

  it('should get search movie result', () => {
    service.searchMovies(page, url).subscribe(movies => {
      expect(movies).toBeTruthy("No movies were found");
     })
     const req = httpTestingController.expectOne(`https://api.themoviedb.org/3${url}?page=${page}&query=${searchValue}&api_key=d33ba7e1bc45df9657b409f5ff9fc828`);
     expect(req.request.method).toBe('GET');
  });

  it('should get movie videos result', () => {
      service.getMovieVideos(id).subscribe(movie => {
        expect(movie).toBeTruthy("No movie was found");
      })
      const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movie/536437/videos?api_key=d33ba7e1bc45df9657b409f5ff9fc828');
      expect(req.request.method).toBe('GET');
  });

  it('should get movie images', () => {
      service.getMovieImages(id).subscribe(movie => {
        expect(movie).toBeTruthy("No movie was found");
      });
      const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movie/536437/images?api_key=d33ba7e1bc45df9657b409f5ff9fc828');
      expect(req.request.method).toBe('GET');
  });

  it('should get movie credits', () => {
    service.getMovieCredits(id).subscribe(movie => {
      expect(movie).toBeTruthy("No movie was found");
    });
    const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movie/536437/credits?api_key=d33ba7e1bc45df9657b409f5ff9fc828');
    expect(req.request.method).toBe('GET');
  });

  it('should get movie genres', () => {
    service.getMoviesGenres().subscribe(movie => {
      expect(movie).toBeTruthy("No movie was found");
    });
    const req = httpTestingController.expectOne('https://api.themoviedb.org/3/genre/movie/list?api_key=d33ba7e1bc45df9657b409f5ff9fc828');
    expect(req.request.method).toBe('GET');
  });

  it('should get movies by genres', () => {
    service.getMoviesByGenre(genreId, page).subscribe(movie => {
      expect(movie).toBeTruthy("No movie was found");
    });
    const req = httpTestingController.expectOne(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&api_key=d33ba7e1bc45df9657b409f5ff9fc828`);
    expect(req.request.method).toBe('GET');
  });
});
