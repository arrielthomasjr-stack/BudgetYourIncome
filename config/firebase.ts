// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Platform } from "react-native";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
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

// Initialize analytics only on web (not available in React Native)
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (Platform.OS === "web") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    analytics = null;
  }
}

// export commonly used services
// Use initializeAuth with AsyncStorage persistence for React Native
export const auth =
  Platform.OS === "web"
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
      });
export const db = getFirestore(app);
export { analytics };

export default app;
