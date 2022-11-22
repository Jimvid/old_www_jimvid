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
          <h1 className="text-3xl mb-4 font-bold">{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md.render(content) }}></div>
        </section>
      </Layout>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMarkdownPaths("content/snippets");

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { frontmatter, content } = getSingleMarkdownFileBySlug(
    "content/snippets",
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
