// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXuFA0uAl7SNciRSKpX27BbsHtWmleUpU",
  authDomain: "budgetyourincome.firebaseapp.com",
  projectId: "budgetyourincome",
  storageBucket: "budgetyourincome.firebasestorage.app",
  messagingSenderId: "387179062213",
  appId: "1:387179062213:web:5e80e3e043ba5d03df21ac",
  measurementId: "G-SQFRWKN53P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics only when supported (guard for React Native / non-web)
let analytics: ReturnType<typeof getAnalytics> | null = null;
try {
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }
} catch (e) {
  // Analytics not available in this environment (e.g. React Native)
  analytics = null;
}

// export commonly used services
export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };

export default app;
