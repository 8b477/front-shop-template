import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomeContainerComponent } from './articles-container.component';

describe('ArticlesHomeContainerComponent', () => {
  let component: ArticlesHomeContainerComponent;
  let fixture: ComponentFixture<ArticlesHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesHomeContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
