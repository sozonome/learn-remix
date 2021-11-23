import { Link, Outlet, useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";
import { getPosts, Post } from "~/post";

import adminstyles from "~/styles/admin.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: adminstyles }];
};

export const loader: LoaderFunction = () => {
  return getPosts();
};

const Admin = () => {
  const posts = useLoaderData<Array<Post>>();

  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
