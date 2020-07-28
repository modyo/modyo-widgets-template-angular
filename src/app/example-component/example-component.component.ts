import { Component, OnInit,Input } from '@angular/core';
import {Post} from '../interfaces/Post'

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
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
