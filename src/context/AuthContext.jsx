import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider, db, serverTimestamp } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  async function ensureUserProfile(user) {
    if (!user) return null;
    try {
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        const data = {
          uid: user.uid,
          email: user.email || null,
          displayName: user.displayName || null,
          role: "user",
          createdAt: serverTimestamp()
        };
        await setDoc(userRef, data, { merge: true });
        return data;
      }
      return snap.data();
    } catch (err) {
      console.error("ensureUserProfile error", err);
      return null;
    }
  }

  function signup(email, password, displayName) {
    return createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
      const user = userCredential.user;
      if (displayName) {
        await updateProfile(user, { displayName });
      }
      const profile = await ensureUserProfile(user);
      setUserProfile(profile);
      return user;
    });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth).then(() => {
      setCurrentUser(null);
      setUserProfile(null);
    });
  }

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const profile = await ensureUserProfile(user);
      setUserProfile(profile);
      return user;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const profile = await ensureUserProfile(user);
        setUserProfile(profile);
      } else {
        setCurrentUser(null);
        setUserProfile(null);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    userProfile,
    authLoading,
    signup,
    login,
    logout,
    signInWithGoogle,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
