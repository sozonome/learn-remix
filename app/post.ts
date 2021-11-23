export type Post = {
  slug: string;
  title: string;
};

export const getPosts = () => {
  let posts: Array<Post> = [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];

  return posts;
};