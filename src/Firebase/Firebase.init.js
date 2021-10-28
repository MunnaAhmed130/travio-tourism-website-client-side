import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseAuthentication = () => {
    const app = initializeApp(firebaseConfig);
}

export default FirebaseAuthentication;