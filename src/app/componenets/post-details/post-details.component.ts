import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/Post/post.service';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common'; // Add this line

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postService.getPost(+id).subscribe((post) => (this.post = post));
  }

  goBack() {
    this.location.back();
  }
  save() {
    this.postService.updatePost(this.post).subscribe(() => this.goBack());
  }
}
