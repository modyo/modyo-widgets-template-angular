import { Injectable } from '@angular/core';
import {Post} from './interfaces/Post';
import Repository from '../repositories/RepositoryFactory';
const PostRepository = Repository.get('posts');

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  async getPosts(): Promise<Post[]>{
    const response = await PostRepository.getTop(3);
    const postsResponse = response.entries.map((entry) => ({
      description: entry.fields.description,
      id: entry.meta.uuid,
      title: entry.fields.title,
      slug: entry.fields.slug,
      image: entry.fields.covers ? entry.fields.covers[0].url : '',
      imageAlt: entry.fields.covers ? entry.fields.covers[0].alt_text : '',
    }));
    return postsResponse;
  }
}
