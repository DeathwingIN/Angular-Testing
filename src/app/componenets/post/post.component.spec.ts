import { PostComponent } from './post.component';
import { Post } from '../../models/post';
import { first } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('Post Component', () => {
  let fixture: ComponentFixture<PostComponent>;
  let comp: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostComponent],
    });

    fixture = TestBed.createComponent(PostComponent);
    comp = fixture.componentInstance;
  });

  it('should create post component Using TestBed', () => {
    expect(comp).toBeDefined();
  });

  it('should raise and event when the delete post is clicked', () => {
    const post: Post = { id: 1, title: 'testTile1', body: 'testBody1' };
    comp.post = post;

    comp.deletePost.pipe(first()).subscribe((slectedPost) => {
      expect(slectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});
