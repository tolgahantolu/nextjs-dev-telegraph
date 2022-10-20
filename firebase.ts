import { initializeApp, FirebaseOptions, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { handlerSetUser } from "./utils";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
function createFirebaseApp(firebaseConfig: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}
const app = createFirebaseApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user: any) => {
  if (user) {
    let data = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };
    handlerSetUser(data);
  } else {
    handlerSetUser(false);
  }
});

export const login = async (email: any, password: any) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error: any) {
    alert(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    alert(error.message);
  }
};
