import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Home</h1>

      <Link
        href="/about"
        className="block text-blue-600 underline underline-offset-4 hover:text-blue-800 mb-4 transition"
      >
        Visit About
      </Link>

      <Link
        href="/posts"
        className="block text-blue-600 underline underline-offset-4 hover:text-blue-800 transition"
      >
        Visit Posts
      </Link>
    </div>

  );
}
