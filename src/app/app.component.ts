import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from './posts.service';
import { Post } from './interfaces/Post';
import liquidParser from '../liquid/liquidParser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  posts: Post[] = [];
  title = 'modyo-widgets-template-angular';
  siteName = liquidParser.parse('{{site.name}}');
  year = new Date().getFullYear();
  heart = faHeart;

  constructor(private postsService: PostsService) { }

  async getPosts(): Promise<void> {
    this.posts = await this.postsService.getPosts();
  }

  ngOnInit(): void {
     this.getPosts();
  }
}
