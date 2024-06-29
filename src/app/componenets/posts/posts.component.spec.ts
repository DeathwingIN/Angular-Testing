import { of } from 'rxjs';
import { Post } from '../../models/post';
import { PostsComponent } from './posts.component';


describe('PostsComponent', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;

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

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePosts']);

    component = new PostsComponent(mockPostService);
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
