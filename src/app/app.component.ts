import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {PostsService} from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  posts: any[] = [];
  title = 'modyo-widgets-template-angular';
  siteName = '';
  year = '';
  heart = faHeart;

  constructor(private postsService: PostsService) { }

  async getPosts(): Promise<void> {
    this.posts = await this.postsService.getPosts();
  }

  ngOnInit(): void {
     this.getPosts();
  }
}
