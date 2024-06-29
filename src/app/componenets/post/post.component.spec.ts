import { PostComponent } from './post.component';
import { Post } from '../../models/post';
import { first } from 'rxjs';

describe('Post Component', () => {
  it('should raise and event when the delete post is clicked', () => {
    const comp = new PostComponent();
    const post: Post = { id: 1, title: 'testTile1', body: 'testBody1' };
    comp.post = post;

    comp.deletePost.pipe(first()).subscribe((slectedPost) => {
        expect(slectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});
