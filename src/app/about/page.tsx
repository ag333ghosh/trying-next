"use client";
import { useRouter } from "next/navigation";

export default function About() {

    const router = useRouter();

    function goToHome(){
        router.push("/")
    }

    return (
        <div>
            <h1>About Page</h1>
            <button onClick={goToHome} className="bg-blue-600 text-white px-4 py-2 mt-4">
                Go to Home
            </button>
        </div>
    );
}