"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center bg-gradient-to-b from-blue-200 to-green-200">
      <div className="text-center p-8 bg-white border-2 border-gray-300 bg-opacity-80 rounded-lg shadow-lg max-w-2xl">
        <h1 className="font-bold uppercase text-black text-lg">
          Login to SayBuild
        </h1>
        <p className="text-black mt-4">
          You need to login with your Google account to access the SayBuild
        </p>
        <button
          className="mt-6 inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
