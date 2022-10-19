import React from "react";
import { NextPage } from "next";
import { getCategoryPosts } from "../../services";
import Image from "next/image";
import Link from "next/link";

import avatarSVG from "../../public/avatar.svg";
import { SlOptionsVertical } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import moment from "moment";
import Head from "next/head";

const CategoryPosts: NextPage<{ posts: String[] | any }> = (props) => {
  const { name, posts } = props.posts;
  console.log(name, posts);
  return (
    <>
      <Head>
        <title>{name} Posts</title>
      </Head>

      <div className="py-[147px] px-6">
        <h1 className="text-lg font-semibold mb-8 text-headline-color">
          {name} Posts
        </h1>
        {posts.length !== 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* single post */}
            {posts.map((post: any) => (
              <div key={post.title}>
                <Link href={`/post/${post.slug}`}>
                  <a>
                    <div className="bg-light-black rounded-xl">
                      <div className="p-2">
                        <div className="px-2">
                          <div className="flex justify-between">
                            <div className="flex items-center gap-x-2">
                              <Image
                                src={
                                  post.author.photo
                                    ? post.author.photo.url
                                    : avatarSVG
                                }
                                width={32}
                                height={32}
                                className="object-center object-cover rounded-full"
                                alt={post.author.name}
                              />
                              <h3 className="text-sm">{post.author.name}</h3>
                            </div>
                            <button type="button">
                              <SlOptionsVertical />
                            </button>
                          </div>

                          <div className="mt-4 mb-8">
                            <h1 className="text-2xl leading-7 font-bold tracking-wide text-white mb-2">
                              {post.title}
                            </h1>
                            <p className="text-xs">
                              {moment(post.createdAt).format("MMM DD, YYYY")}
                            </p>
                          </div>
                        </div>

                        <div>
                          <Image
                            src={post.featuredImage.url}
                            width={254}
                            height={160}
                            layout="responsive"
                            className="rounded-xl object-center object-cover"
                            alt={post.title}
                          />
                        </div>

                        <div className="px-2 pt-3 flex items-center justify-between">
                          <div className="flex items-center relative transition-all hover:text-white">
                            <span className="text-2xl">
                              <BiUpvote />
                            </span>
                            <span className="absolute left-7 text-lg">
                              {post.upvoted}
                            </span>
                          </div>
                          <div className="transition-all hover:text-white">
                            <span className="text-2xl">
                              <FaRegCommentDots />
                            </span>
                          </div>
                          <div className="transition-all hover:text-white">
                            <span className="text-2xl">
                              <BsBookmark />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
            {/* single post */}
          </div>
        ) : (
          <p>Post not found...</p>
        )}
      </div>
    </>
  );
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
