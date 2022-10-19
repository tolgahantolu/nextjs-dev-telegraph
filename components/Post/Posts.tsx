import React from "react";
import Link from "next/link";
import Image from "next/image";

import avatarSVG from "../../public/avatar.svg";
import { SlOptionsVertical } from "react-icons/sl";
import { BsBookmark } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { BiUpvote } from "react-icons/bi";
import moment from "moment";

const Posts: React.FC<{ posts: String[] | any[] }> = (props) => {
  console.log(props.posts);
  return (
    <>
      <div className="py-[147px] w-full h-auto px-6 bg-main-background">
        <h1 className="text-lg font-semibold mb-8 text-headline-color">
          Recommended
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* single post */}
          {props.posts.map((post) => (
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
      </div>
    </>
  );
};

export default Posts;
