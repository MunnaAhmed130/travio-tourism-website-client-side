import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    // console.log(auth);
    const googleProvider = new GoogleAuthProvider();
    // console.log(user);
    const handleGoogleLogIn = () => {
        // setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
        // .then((result) => {
        //     const { user } = result;
        //     console.log(result.user);
        //     setUser(user);

        // }).catch((error) => {
        //     setError(error.message)
        // })
        // .finally(() => { setIsLoading(false) })
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return {
        user,
        error,
        isLoading,
        handleGoogleLogIn,
        handleLogOut,
    };
};

export default UseFirebase;
