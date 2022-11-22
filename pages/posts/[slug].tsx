import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import {
  getAllMarkdownPaths,
  getSingleMarkdownFileBySlug,
} from "../../lib/markdown";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";

// Markdown it with syntax highlighting
const md = markdownIt().use(highlightjs);

const Post: NextPage = ({ frontmatter, content }: any) => {
  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content="Collection of snippets" />
      </Head>
      <Layout>
        <section>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: md.render(content) }}
          ></div>
        </section>
      </Layout>
    </div>
  );
};

// export const config = {
//   unstable_runtimeJS: false,
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMarkdownPaths("content/posts");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontmatter, content } = getSingleMarkdownFileBySlug(
    "content/posts",
    params
  );

  return {
    props: {
      frontmatter,
      content,
    },
  };
};

export default Post;
