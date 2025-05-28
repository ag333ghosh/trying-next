

import Link from "next/link";

export default function Posts() {
  const posts = [
    { id: 1, name: "Sumit Mandal", post: "Something random" },
    { id: 2, name: "Amit Sharma", post: "Just another post" },
    { id: 3, name: "Priya Mehra", post: "Random thoughts here" },
    { id: 4, name: "Ravi Kumar", post: "Learning Next.js is fun!" },
    { id: 5, name: "Neha Jain", post: "Coffee and code ☕" },
    { id: 6, name: "Ali Khan", post: "React hooks are awesome!" },
    { id: 7, name: "Tina Roy", post: "Monday motivation 💪" },
    { id: 8, name: "Vikram Joshi", post: "Working on my portfolio" },
    { id: 9, name: "Sara Ali", post: "Looking for a dev job 👀" },
    { id: 10, name: "Mohit Verma", post: "Chilling with friends" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold text-green-500 mb-6">Posts...</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{post.post}</h2>
          <p className="text-gray-500 mb-4">By: {post.name}</p>
          <Link
            href={`/posts/${post.id}?name=${(post.name)}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Visit
          </Link>
        </div>
      ))}
    </div>
  );
}
