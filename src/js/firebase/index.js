import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig.js";

console.log (firebaseConfig)
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export app
export default app;

// Export DB
export let  db = getFirestore(app);