import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { AppModule } from '../app.module';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      imports :[AppModule],
      providers : [MoviesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  xit('should get movies by page', () => {
    expect(component.getMoviesPage(1)).toBeGreaterThan(0);
  })

});
