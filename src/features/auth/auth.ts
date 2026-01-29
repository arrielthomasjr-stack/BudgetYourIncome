import { auth, db } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

type SignUpData = {
  email: string;
  password: string;
  displayName?: string;
};

export async function signUpWithEmail({ email, password, displayName }: SignUpData) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user as User;

  if (displayName) {
    await updateProfile(user, { displayName });
  }

  // create a user doc in Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName ?? null,
    createdAt: new Date().toISOString(),
  });

  return user;
}

export async function signInWithEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export function signOutUser() {
  return signOut(auth);
}

export default {
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
};
