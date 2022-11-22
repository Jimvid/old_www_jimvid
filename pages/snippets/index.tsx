import type { NextPage } from "next";

import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllMarkdownFilesInDir, MarkdownFile } from "../../lib/markdown";
import Post from "../../components/Post";
import Link from "next/link";

const Posts = ({ snippets }: { snippets: MarkdownFile[] }) => {
  return (
    <div>
      <Head>
        <title>Snippets</title>
        <meta name="description" content="Collection of posts" />
      </Head>
      <Layout>
        <h1 className="text-4xl font-bold mb-4">Snippets</h1>
        <p className="mb-10">
          Simple and short solutions that can be copied and pasted.
        </p>
        <section className="flex flex-col gap-14">
          <table className="text-base">
            <thead className="border-b-2 font-bold border-accent">
              <tr>
                <td className="p-4">Name</td>
                <td className="p-4">Description</td>
                <td className="p-4">Last updated</td>
              </tr>
            </thead>
            <tbody>
              {snippets?.map((snippet: any) => {
                const { slug, frontmatter } = snippet;
                const { title, description, date } = frontmatter;

                return (
                  <tr key={slug} className="text-sm hover:bg-darker rounded">
                    <td className="p-4 font-semibold">
                      <Link href={`/snippets/${slug}`}>
                        <a className="text-accent">{title}</a>
                      </Link>
                    </td>
                    <td className="p-4">{description}</td>
                    <td className="p-4">{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </Layout>
    </div>
  );
};

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  const snippets = getAllMarkdownFilesInDir("content/snippets");

  return {
    props: { snippets },
  };
}

export default Posts;
