import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
@Input() post!: Post;
@Output() deletePost = new EventEmitter<Post>();

constructor() {}

ngOnInit(): void {

}

onDeletePost(event:Event){
event.stopPropagation();
this.deletePost.emit(this.post);
}


}
