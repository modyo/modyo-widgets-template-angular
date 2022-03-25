import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from './posts.service';
import { Post } from './interfaces/Post';
import liquidParser from '../liquid/liquidParser';
import { TranslateService } from '@ngx-translate/core';
import es from '../assets/i18n/es';
import en from '../assets/i18n/en';

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
  lang = liquidParser.parse('{{site.language}}');
  param = {value: this.lang};

  constructor(private postsService: PostsService, public translate: TranslateService) {}

  async getPosts(): Promise<void> {
    this.posts = await this.postsService.getPosts();
  }

  ngOnInit(): void {
    // this.getPosts();
    
    this.translate.setTranslation('en', en);
    this.translate.setTranslation('es', es);

    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');

    this.translate.use(this.lang);

  }
}
