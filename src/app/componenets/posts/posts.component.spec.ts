import { of } from 'rxjs';
import { Post } from '../../models/post';
import { PostsComponent } from './posts.component';
import { TestBed } from '@angular/core/testing';
import { PostService } from '../../services/Post/post.service';

class mockPostService {
  getPosts() {}
  deletePosts(post: Post) {
    return of(true);
  }
}

describe('PostsComponent', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let postService: any;

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
   // mockPostService = jasmine.createSpyObj(['getPosts', 'deletePosts']);
    TestBed.configureTestingModule({
      providers: [
        PostsComponent,
        {
          provide: PostService,
          useClass: mockPostService,
        },
      ],
    });

    component = TestBed.inject(PostsComponent);
    postService = TestBed.inject(PostService);

  });

  //Delete method eka test tika 3 scenarrios

  describe('delete', () => {
    beforeEach(() => {
      // postService.deletePosts.and.returnValue(of(true));
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
      spyOn(postService, 'deletePosts').and.returnValue(of(true));
      component.deletePosts(POSTS[1]);
      expect(postService.deletePosts).toHaveBeenCalledTimes(1);
    });
  });
});
