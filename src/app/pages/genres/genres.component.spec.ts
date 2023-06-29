import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresComponent } from './genres.component';
import { AppModule } from 'src/app/app.module';

describe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresComponent ],
      imports :[AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
