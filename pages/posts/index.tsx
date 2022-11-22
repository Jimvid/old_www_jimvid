import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllMarkdownFilesInDir, MarkdownFile } from "../../lib/markdown";
import Post from "../../components/Post";

const Posts = ({ posts }: { posts: MarkdownFile[] }) => {
const hello = "test";
  return (
    <div>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Collection of posts" />
      </Head>
      <Layout>
        <h1 className="text-4xl font-bold mb-10">Posts</h1>
        <section className="flex flex-col gap-14">
          {posts?.map((post: any) => {
            const { slug, frontmatter } = post;
            const { title, description, date } = frontmatter;

            return (
              <Post
                key={title}
                title={title}
                description={description}
                date={date}
                slug={slug}
              />
            );
          })}
        </section>
      </Layout>
    </div>
  );
};

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  const posts = getAllMarkdownFilesInDir("content/posts");

  return {
    props: { posts },
  };
}

export default Posts;
