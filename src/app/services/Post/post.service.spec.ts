import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

describe('Post Service', () => {
  let postService: PostService;
  let httpCientSpy: jasmine.SpyObj<HttpClient>;
  let POSTS = [
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

  beforeEach(() => {
     httpCientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [PostService, { provide: HttpClient, useValue: httpCientSpy }],
    });
    postService = TestBed.inject(PostService);
    httpCientSpy= TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('getPosts', () => {
    it('Should return exoected posts when getPosts is acalled', () => {
      httpCientSpy.get.and.returnValue(of(POSTS));
      postService.getPosts().subscribe({
        next: (posts) => {
          expect(posts).toEqual(POSTS);
        },
        error: (error) => {
          fail('Expected posts, not error');
        },
      });
      expect(httpCientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
