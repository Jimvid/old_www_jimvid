import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  getAllMarkdownPaths,
  getSingleMarkdownFileBySlug,
} from "../../lib/markdown";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import Icon from "../../components/Icon";

// Markdown with syntax highlighting
const md = markdownIt().use(highlightjs);

const Post: NextPage = ({ frontmatter, content }: any) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content="Collection of snippets" />
      </Head>
      <Layout>
        <section>
          <button
            className="text-sm text-white opacity-40 flex items-center gap-2 mb-2 scale-90 font-medium"
            onClick={() => router.back()}
          >
            <Icon className="rotate-180 scale-90" icon={"arrow-white.svg"} />
            Back
          </button>
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
