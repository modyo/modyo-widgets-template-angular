import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  posts=[]
  title = 'modyo-widgets-template-angular';
  siteName='My Site';
  year = '2020'
  heart = faHeart
  
  constructor(private postsService:PostsService){}

  async getPosts(): Promise<void> {
    this.posts = await this.postsService.getPosts();
  }
  
  ngOnInit() {
    this.getPosts();
  }
  
}
