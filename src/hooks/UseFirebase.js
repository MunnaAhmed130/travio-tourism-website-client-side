import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const handleGoogleLogIn = () => {
        // setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { user } = result.user;
                console.log(result.user);
                // setUser(user);

            }).catch((error) => {
                setError(error.message)
            })
        // .finally(() => { setIsLoading(false) })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            // setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        user,
        error,
        // isLoading,
        handleGoogleLogIn,
        handleLogOut
    }

};

export default UseFirebase;