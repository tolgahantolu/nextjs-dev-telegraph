import React, { FormEvent, Key, useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import avatarSVG from "../../public/avatar.svg";
import { getPostDetailData, submitComment } from "../../services";
import moment from "moment";
import Head from "next/head";

const PostDetails: NextPage<{ post: String[] | any; slug: String }> = (
  props
) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmitComment = (e: FormEvent) => {
    e.preventDefault();
    console.log("Comment submitting...");

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const comment = commentTextareaRef.current?.value;

    const commentObj = {
      name,
      email,
      comment,
      slug: props.slug,
    };

    submitComment(commentObj).then((res) => {
      console.log("Comment submitting!", res);
    });
  };
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>

      <div className="py-[147px] px-6 md:px-24 lg:px-48 xl:px-72">
        <div>
          <Image
            src={props.post.featuredImage.url}
            width={300}
            height={200}
            layout="responsive"
            className="object-center object-cover"
            alt={props.post.title}
          />
        </div>

        <div className="mt-8">
          <div className="flex gap-x-2">
            {props.post.categories.map((category: String | any, i: Key) => (
              <Link href={`/category/${category.slug}`} key={i}>
                <a
                  className="text-[8px] sm:text-[10px] font-medium text-headline-color px-2 py-1 bg-light-black"
                  key={category.slug}
                >
                  {category.name}
                </a>
              </Link>
            ))}
          </div>

          <h1 className="mt-1 text-3xl sm:text-4xl font-semibold text-headline-color">
            {props.post.title}
          </h1>

          <div className="mt-4 flex items-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <Image
                src={
                  props.post.author.photo
                    ? props.post.author.photo.url
                    : avatarSVG
                }
                width={32}
                height={32}
                className="object-center object-cover rounded-full"
                alt={props.post.author.name}
              />
              <h3 className="text-sm md:text-base">{props.post.author.name}</h3>
            </div>
            <span>-</span>
            <p className="text-xs md:text-base">
              {moment(props.post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>

        <div className="mt-8 mb-4">
          <p className="sm:text-lg">{props.post.content.text}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl sm:text-[26px] font-medium text-headline-color -mb-2">
            {props.post.comments.length} Comments
          </h3>
          {props.post.comments.map((c: String | any, i: Key) => (
            <div
              className="py-4 last:border-none border-b border-main-color"
              key={i}
            >
              <div className="flex items-center gap-x-2 text-sm sm:text-base italic">
                <p>{c.name}</p>
                <span>-</span>
                <p className="text-xs">
                  {moment(c.publishedAt).format("MMM DD, YYYY")}
                </p>
              </div>
              <p className="pt-1 text-[15px] sm:text-[17px]">{c.comment}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl sm:text-[26px] font-medium text-headline-color mb-2">
            Add Comment
          </h3>
          <form>
            <div className="mb-6">
              <input
                ref={nameInputRef}
                required
                type="text"
                placeholder="Your name"
                className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-color focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <input
                ref={emailInputRef}
                required
                type="email"
                placeholder="Your email"
                className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-color focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <textarea
                ref={commentTextareaRef}
                required
                className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-color focus:outline-none"
                placeholder="Your comment"
              ></textarea>
            </div>

            <div className="text-left">
              <button
                onClick={handleSubmitComment}
                type="submit"
                className="block w-full px-7 py-3 bg-light-black border border-main-color text-white font-medium text-sm leading-snug uppercase rounded focus:outline-none focus:ring-0 transition-all ease-in-out"
              >
                Post Comment
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Your comment has been saved as a "draft". It will appear here,
                once approved. If you're wondering what response you got back,
                check the network!
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export const getServerSideProps = async ({ params }: any) => {
  const slug: String = params.slug;
  const post = await getPostDetailData(slug);

  return {
    props: {
      post,
      slug,
    },
  };
};
