import React, { useEffect } from "react";
import gsap from "gsap";

const LoginPage = ({ handleLogin }) => {
  useEffect(() => {
    // GSAP animation for text fade-in and button bounce effect
    gsap.fromTo(
      ".login-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".login-button",
      { scale: 0 },
      { scale: 1, duration: 0.8, delay: 0.5, ease: "elastic.out(1, 0.75)" }
    );
    gsap.fromTo(
      ".background",
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white relative overflow-hidden">
      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold mb-6 login-text">
          Welcome to Our App
        </h1>
        <p className="text-lg mb-10 opacity-80 login-text">
          Log in to explore and get personalized content.
        </p>
        <button
          className="login-button px-8 py-4 bg-purple-800 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-purple-700 focus:outline-none"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 background" />
    </div>
  );
};

export default LoginPage;
