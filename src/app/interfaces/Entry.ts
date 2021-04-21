export interface Entry {
  fields: {
    description: string;
    title: string;
    slug: string;
    covers: {
      alt_text: string;
      url: string
    }[];
  };
  meta: {
    uuid: string;
  }
}
