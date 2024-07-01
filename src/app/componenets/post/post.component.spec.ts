import { PostComponent } from './post.component';
import { Post } from '../../models/post';
import { first, of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('Post Component', () => {
  let fixture: ComponentFixture<PostComponent>;
  let comp: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'testID' }),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(PostComponent);
    comp = fixture.componentInstance;
  });

  it('should create post component Using TestBed', () => {
    expect(comp).toBeDefined();
  });

  //Check html elemnts
  it('Should render the title in <a> tag', () => {
    const post: Post = { id: 1, title: 'Title01', body: 'testBody1' };
    comp.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toEqual(post.title);
  });
  it('Should render the title in <a> tag using debug element', () => {
    const post: Post = { id: 1, title: 'Title01', body: 'testBody1' };
    comp.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElemnt: HTMLElement = postDebugElement.query(
      By.css('a')
    ).nativeElement;
    expect(aElemnt.textContent).toContain(post.title);
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
