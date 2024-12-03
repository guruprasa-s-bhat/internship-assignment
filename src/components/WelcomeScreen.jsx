import React, { useEffect } from "react";
import gsap from "gsap";

const WelcomeScreen = ({ user }) => {
  useEffect(() => {
    // GSAP animation for text entrance effects
    gsap.fromTo(
      ".welcome-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white relative overflow-hidden">
      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold mb-6 welcome-text">
          Welcome, {user.displayName}!
        </h1>
        <p className="text-lg mb-8 opacity-80 welcome-text">
          You're all set up. Here's your email: {user.email}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-50 background" />
    </div>
  );
};

export default WelcomeScreen;
