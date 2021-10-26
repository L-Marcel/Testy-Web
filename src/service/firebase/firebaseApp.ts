import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { githubSignIn, googleSignIn } from "./signInMethods";

const config = {
  apiKey: "AIzaSyCCo7Dnyse2SbSb9wdewERCVtVNoDUepqg",
  authDomain: "testy-e9da1.firebaseapp.com",
  projectId: "testy-e9da1",
  storageBucket: "testy-e9da1.appspot.com",
  messagingSenderId: "260949557157",
  appId: "1:260949557157:web:d3487e7883a336a6b4b24c",
  measurementId: "G-FFWPDQXM3C"
};

class Firebase {
  static app: FirebaseApp;
  static auth: Auth;

  static async execute() {
    Firebase.app = initializeApp(config);
    Firebase.auth = getAuth();
  };

  static async github() {
    const token = await githubSignIn(Firebase.auth);
    console.log(token);
  };

  static async google() {
    const token = await googleSignIn(Firebase.auth);
    console.log(token);
  };
};

export { Firebase };