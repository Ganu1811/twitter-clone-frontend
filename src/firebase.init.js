import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVEFbh8c_MFq9IpJ5wV7R2EbRzoHvsD7U",
  authDomain: "twitter-4e133.firebaseapp.com",
  projectId: "twitter-4e133",
  storageBucket: "twitter-4e133.appspot.com",
  messagingSenderId: "402843498256",
  appId: "1:402843498256:web:e2d3dfca7a367e34d5d795",
  measurementId: "G-F95SRXFBZZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;