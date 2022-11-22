import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const Post = ({
  title,
  date,
  description,
  slug,
}: {
  title: string;
  date: string;
  description: string;
  slug: string;
}) => {
  return (
    <article key={title}>
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <h3 className="text-xs opacity-80 mb-4">{date}</h3>
      <p className="text-base mb-4">{description}</p>
      <Link href={`/posts/${slug}`}>
        <span className="flex gap-2 items-center text-lg cursor-pointer">
          Read more <Icon icon="arrow.svg" />
        </span>
      </Link>
    </article>
  );
};

export default Post;
