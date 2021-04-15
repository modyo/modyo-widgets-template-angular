import PostRepository from './PostRepository';
import ApiRepository from './ApiRepository';

const repositories = {
  posts: PostRepository,
  api: ApiRepository,
};
const RepositoryFactory = {
  get: (name: 'posts' | 'api'): typeof PostRepository | typeof ApiRepository => repositories[name],
};

export default RepositoryFactory;
