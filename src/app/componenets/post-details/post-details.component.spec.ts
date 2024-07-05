/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './post-details.component';
import { CommonModule, Location } from '@angular/common';
import { PostService } from '../../services/Post/post.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Post } from '../../models/post';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


describe('PostDetailsComponent', () => {
  let fixture: ComponentFixture<PostDetailsComponent>;
  let mockPostService: jasmine.SpyObj<PostService>;
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };
    mockPostService = jasmine.createSpyObj('PostService', [
      'getPost',
      'updatePost',
    ]);

    let mockLocation = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent], // Declare the component under test
      imports: [CommonModule,FormsModule], // Ensure CommonModule is imported here
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: PostService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(PostDetailsComponent);
  });

  it('should render post tile', () => {
    mockPostService.getPost.and.returnValue(
      of({ id: 3, title: 'test title', body: 'Body ' } as Post)
    );
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement;
    expect(element.textContent).toBe(fixture.componentInstance.post.title);
  });
});
 */