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
    <div className="relative w-full h-full">
      <img
        src="/mic.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg">
          <h1 className="font-bold uppercase text-black text-lg">
            Login to SayBuild
          </h1>
          <p className="text-black mt-4">
            You need to login with your Google account to access the SayBuild
          </p>
          <button
            className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            onClick={handleGoogleLogin}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
