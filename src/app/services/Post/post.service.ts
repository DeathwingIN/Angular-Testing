import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  deletePosts(post: Post) {
    return this.http.delete(
      'https://jsonplaceholder.typicode.com/posts/' + post.id
    );
  }
}
