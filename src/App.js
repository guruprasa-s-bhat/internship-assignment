import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import WelcomeScreen from "./components/WelcomeScreen";
import { signInWithGoogle } from "./firebase"; // Ensure firebase.js has this function

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      {!user ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <WelcomeScreen user={user} />
      )}
    </>
  );
};

export default App;
