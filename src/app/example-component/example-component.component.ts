import { Component, Input, ViewEncapsulation } from '@angular/core';
import {Post} from '../interfaces/Post';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ExampleComponentComponent {

  @Input()
  post!: Post;


  linkFull(): string{
    return this.post.slug;
  }
}
