import { of } from 'rxjs';
import { Post } from '../../models/post';
import { PostsComponent } from './posts.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from '../../services/Post/post.service';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PostComponent } from '../post/post.component';

class mockPostService {
  getPosts() {}
  deletePosts(post: Post) {
    return of(true);
  }
}

describe('PostsComponent', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body1',
        title: 'title1',
      },
      {
        id: 2,
        body: 'body3',
        title: 'title2',
      },
      {
        id: 3,
        body: 'body3',
        title: 'title3',
      },
    ];
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => 'test', // Mock any route parameters as needed
        },
      },
    };

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePosts']);

    TestBed.configureTestingModule({
      imports: [PostsComponent, RouterTestingModule, PostComponent],

      providers: [
        {
          provide: PostService,
          useValue: mockPostService,
        },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create exact same number of Post Component with Posts', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    const postComponentDEs = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );
    expect(postComponentDEs.length).toBe(POSTS.length);
  });

  it('Should set posts from the service directly', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    component.ngOnInit(); //fixture.detectChanges(); can use
    expect(component.posts.length).toBe(3);
  });

  it('Should create one post child element for each post', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const postsElment = debugElement.queryAll(By.css('.posts'));
    expect(postsElment.length).toBe(POSTS.length);
  });

  //Delete method eka test tika 3 scenarrios

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePosts.and.returnValue(of(true));
      component.posts = POSTS;
    });

    it('should delete post', () => {
      component.deletePosts(POSTS[1]);
      expect(component.posts.length).toBe(2); //okkoma 03 dlete krhm 2i
    });

    it('should delete actual selected post from the posts', () => {
      component.deletePosts(POSTS[1]);
      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call delete method in post Service one time', () => {
      component.deletePosts(POSTS[1]);
      expect(mockPostService.deletePosts).toHaveBeenCalledTimes(1);
    });
  });
});
