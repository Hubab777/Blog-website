import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Iblog } from "@/app/page";
import CommentSection from "@/app/components/CommentSection";

interface Params {
  params: {
    slug: string;
  };
}

const BlogPost = async (params: Params) => {
  const { slug } = params.params;

  const data: Iblog = await client.fetch(
    `*[_type == "blog" && slug.current ==$slug][0]{
    heading,
    description,
    category,
    "slug": slug.current,
    "imageUrl": coalesce(image.asset->url, ""),
     publishedDate,
    author->{
    name,
    "imageUrl": image.asset->url,
    bio
  },
  }`,
    { slug }
  );

  return (
    <div className="bg-slate-100">
      <main className="max-w-5xl my-20 shadow-xl rounded-lg mx-auto p-4 flex flex-col gap-8 items-center bg-slate-100">
        {/* Blog Image */}
        <div className="w-full max-w-[800px] aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            className="object-cover w-full h-full"
            src={data.imageUrl}
            alt={data.heading}
            width={700}
            height={600}
          />
        </div>

        {/* Blog Content */}
        <div className="w-full max-w-[800px] px-4">
          <h2 className="text-3xl font-bold my-6 text-center text-yellow-700">
            {data.heading}
          </h2>
          <p className="text-gray-500 text-sm">{data.publishedDate}</p>
          <p className="text-yellow-700">{data.category}</p>
        </div>

        <div>
          {/* Blog Description */}
          <p className="text-lg leading-relaxed whitespace-pre-wrap text-black text-justify">
            {data.description}
          </p>
        </div>

         {/* Author Details */}
          <div className="w-full max-w-[800px] px-4">
            {data.author.imageUrl && (
              <Image
                src={data.author.imageUrl}
                alt={data.author.name}
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
            <div className="mb-4">
              <p className="text-gray-700 font-medium">By {data.author.name}</p>
              {data.author.bio && (
                <p className="text-sm text-yellow-700">{data.author.bio}</p>
              )}
            </div>
          </div>
      </main>
      {/* Comment Section
       */}
      <CommentSection />
    </div>
  );
};

export default BlogPost;
