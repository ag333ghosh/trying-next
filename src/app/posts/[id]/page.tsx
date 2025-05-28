'use client';
/*
You must add 'use client'; at the top of the file to use React hooks like useSearchParams()
useSearchParams() works only in Client Components.
It returns a URLSearchParams object (like new URLSearchParams() in the browser).
*/

import { useSearchParams, useRouter } from "next/navigation"


import { use } from "react";
/*
A param property was accessed directly with params.id. params is now a Promise and should be unwrapped with React.use()...
*/

// interface PageProps {
//   params: { id: string }
// }
export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();

  function goToPosts() {
    router.push("/posts");
  }

  const { id } = use(params);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "Unknown";

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Info</h1>
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">User ID:</span> {id}
      </p>
      <p className="text-lg text-gray-700 mb-6">
        <span className="font-semibold">User Name:</span> {userName}
      </p>
      <button
        onClick={goToPosts}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium"
      >
        All Posts
      </button>
    </div>

  );
}
