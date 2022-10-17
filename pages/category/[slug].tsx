import React from "react";
import { NextPage } from "next";
import { getCategoryPosts } from "../../services";

const CategoryPosts: NextPage<{ posts: String[] | any }> = (props) => {
  const { name, posts } = props.posts;
  console.log(name, posts);
  return <div className="py-[147px] px-6">Selam arkadaşlar! CategoryPosts</div>;
};

export default CategoryPosts;

export const getServerSideProps = async ({ params }: any) => {
  const slug: String = params.slug;
  const categoryPosts = await getCategoryPosts(slug);

  return {
    props: {
      posts: categoryPosts,
    },
  };
};
