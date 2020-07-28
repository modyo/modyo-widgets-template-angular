import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import {Post} from '../interfaces/Post'

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class ExampleComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() { 
  }

  ngOnInit(): void {
  }
  linkFull():string{
    return this.post.slug
  }
}
