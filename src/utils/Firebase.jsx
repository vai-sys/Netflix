
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZo16p8kjWO8tEzmJDj6f2BBI7kQdWou8",
  authDomain: "netflix-3ac3f.firebaseapp.com",
  projectId: "netflix-3ac3f",
  storageBucket: "netflix-3ac3f.appspot.com",
  messagingSenderId: "42169909583",
  appId: "1:42169909583:web:f6efa2ba41d18282bd453a",
  measurementId: "G-F532LJ7W7J"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);