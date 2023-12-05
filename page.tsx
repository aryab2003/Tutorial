"use client";
import prisma from "@/db";

export default async function Blog() {
  const Blogs = await prisma.Blog.findMany();

  async function deleteUser(uid) {
    await prisma.Blog.delete({
      where: {
        id: uid,
      },
    });
  }

  return (
    <div className="flex flex-col justify-center relative h-[100vh]">
      <h1 className="font-mono w-full h-40 text-center text-xl font-bold text-white mt-0">
        Blog List
      </h1>
      <ul className="flex flex-wrap justify-center">
        {Blogs.map((blog) => (
          <li key={blog.id} className="flex-none w-[20vw] m-5">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-bold mb-4">{blog.Title}</h2>
              <p className="text-gray-600">{blog.Text}</p>
              <p className="text-xs">{blog.createdAT.toString()}</p>
              <button
                className="bg-slate-700 text-white px-4 py-2 rounded font-mono mt-4 hover:bg-white hover:text-slate-700 border border-slate-700 hover:border-slate-700 hover:cursor-pointer"
                onClick={deleteUser(blog.id)} // Pass a function reference
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
