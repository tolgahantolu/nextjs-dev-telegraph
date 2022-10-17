import React, { Key } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import avatarSVG from "../../public/avatar.svg";
import { getPostDetailData } from "../../services";
import moment from "moment";

const PostDetails: NextPage<{ post: String[] | any }> = (props) => {
  console.log(props.post);
  return (
    <div className="py-[147px] px-6">
      <div>
        <Image
          src={props.post.featuredImage.url}
          width={300}
          height={200}
          layout="responsive"
          className="object-center object-cover"
        />
      </div>

      <div className="mt-8">
        <div className="flex gap-x-2">
          {props.post.categories.map((category: String | any, i: Key) => (
            <Link href={`/category/${category.slug}`} key={i}>
              <a
                className="text-[8px] font-medium text-headline-color px-2 py-1 bg-light-black"
                key={category.slug}
              >
                {category.name}
              </a>
            </Link>
          ))}
        </div>

        <h1 className="mt-1 text-3xl font-semibold text-headline-color">
          {props.post.title}
        </h1>

        <div className="mt-4 flex items-center justify-between">
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
            />
            <h3 className="text-sm">{props.post.author.name}</h3>
          </div>
          <p className="text-xs">
            {moment(props.post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <p>{props.post.content.text}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-medium text-headline-color -mb-2">
          {props.post.comments.length} Comments
        </h3>
        {props.post.comments.map((c: String | any, i: Key) => (
          <div
            className="py-4 last:border-none border-b border-main-color"
            key={i}
          >
            <div className="flex items-center gap-x-2 text-sm italic">
              <p>{c.name}</p>
              <span>-</span>
              <p className="text-xs">
                {moment(c.publishedAt).format("MMM DD, YYYY")}
              </p>
            </div>
            <p className="pt-1 text-[15px]">{c.comment}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-medium text-headline-color mb-2">
          Add Comment
        </h3>
        <form className="flex flex-col gap-y-3 ">
          <input
            required
            type="text"
            placeholder="Your name"
            className="outline-none rounded-md bg-light-black p-2 border border-headline-color text-headline-color placeholder-headline-color"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            className="outline-none rounded-md bg-light-black p-2 border border-headline-color text-headline-color placeholder-headline-color"
          />
          <textarea
            required
            className="outline-none rounded-md bg-light-black p-2 border border-headline-color text-headline-color placeholder-headline-color"
            placeholder="Your comment"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-headline-color border border-main-color rounded-md py-2"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;

export const getServerSideProps = async ({ params }: any) => {
  const slug: String = params.slug;
  const post = await getPostDetailData(slug);

  return {
    props: {
      post,
    },
  };
};
