import { Routes } from '@angular/router';
import { PostDetailsComponent } from './componenets/post-details/post-details.component';
import { PostsComponent } from './componenets/posts/posts.component';

export const routes: Routes = [

{path:'posts',component:PostsComponent},
{path:'details/:id',component:PostDetailsComponent},

];
