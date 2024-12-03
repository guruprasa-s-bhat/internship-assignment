import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6Bjx1xsi09AIwbuMPfDrXTLkPQ6knNz0",
  authDomain: "login-app-e6dcc.firebaseapp.com",
  projectId: "login-app-e6dcc",
  storageBucket: "login-app-e6dcc.firebasestorage.app",
  messagingSenderId: "539268340657",
  appId: "1:539268340657:web:2b1016688b00f4f74dfb90",
  measurementId: "G-KZY3TBTEC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export default auth;
