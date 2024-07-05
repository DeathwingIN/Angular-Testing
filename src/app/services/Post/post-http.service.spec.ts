import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('Http Url Test', () => {
  let postService: PostService;
  let httpTestingController: HttpTestingController;
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
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule],
    });

    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('getPosts', () => {
    it('Should return posts when getPosts() is called', (done:DoneFn) => {
      postService.getPosts().subscribe((data)=>{
        expect(data).toEqual(POSTS);
        done();
      });
      const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts')
      request.flush(POSTS);
      expect(request.request.method).toBe('GET');
    });
  });
});
