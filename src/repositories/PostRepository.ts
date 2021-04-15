import ModyoSdk from './clients/ModyoClient';

const space = 'testing';
const type = 'posts';

const content = ModyoSdk.getContentType(space, type);
const privateContent = ModyoSdk.getContentType(space, type, false);


const PostRepository = {
  get(): Promise<any> {
    return content.getEntries();
  },
  getTop(q: number): Promise<any> {
    const filter = content.Filter().Pagination(1, q);
    return content.getEntries(filter);
  },
  getPrivate(): Promise<any> {
    return privateContent.getEntries();
  },
  getPrivateTop(q: number): Promise<any> {
    const filter = content.Filter().Pagination(1, q);
    return privateContent.getEntries(filter);
  },
  getEntry(id: string): Promise<any>{
    return privateContent.getEntry(id);
  },
};

export default PostRepository;
