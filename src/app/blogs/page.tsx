import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export interface Iblog {
  heading: string;
  description: string;
  category: string;
  slug: string;
  imageUrl: string;
  publishedDate: string;
  author: {
    name: string;
    imageUrl: string;
    bio: string;
  };
}

const BlogList = async () => {
  const res: Iblog[] = await client.fetch(`*[_type == "blog"]{
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
  }`);
  console.log(res);


  return (
    <div className="bg-slate-100 mt-1.5">
      <main className="bg-slate-100 min-h-screen flex flex-col gap-12 py-12 px-6 sm:px-10 lg:px-16">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-700">
          Welcome to BlogSection!
          </h1>
          <p className="text-sm sm:text-base mt-3 text-gray-700">
            Discover the latest blog posts about Pakistan diverse tourist attractions.
          </p>
        </div>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {res.map((data, index) => (
            <Link href={`/blog/${data.slug}`} key={index}>
              <div className="bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition-transform cursor-pointer mx-4 sm:mx-8">
                <Image
                  src={data.imageUrl}
                  alt={data.heading}
                  height={500}
                  width={300}
                  className="w-full h-52 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-bold text-yellow-700">
                    {data.heading}
                  </h2>
                  <p className="text-gray-500 text-sm">{data.publishedDate}</p>
        <p className="text-yellow-700">{data.category}</p>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                    {data.description}
                  </p>
                  
                </div>
                 {/* Read more Button */}
               <button
                type="submit"
                className="w-full mt-3 focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none"
              >
                 Read More
              </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogList;
