import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/Post/post.service';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private postService:PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePosts(post: Post) {
    this.postService.deletePosts(post).subscribe(() => {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    });
  }
}
