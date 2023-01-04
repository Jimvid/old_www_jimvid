import Link from "next/link";
import React from "react";
import Icon from "./Icon";

interface PostProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const Post = ({ title, date, description, slug }: PostProps) => {
  return (
    <article key={title}>
      <Link href={`/posts/${slug}`}>
        <span className="cursor-pointer">
          <h2 className="text-xl font-bold mb-1 pointer">{title}</h2>
          <h3 className="text-xs opacity-80 mb-4">{date}</h3>
          <p className="text-base mb-4">{description}</p>
          <span className="flex gap-2 items-center text-md cursor-pointer">
            Read more <Icon className="translate-y-0.5" icon="arrow.svg" />
          </span>
        </span>
      </Link>
    </article>
  );
};

export default Post;
