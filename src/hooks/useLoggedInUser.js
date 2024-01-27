import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useLoggedInUser = () => {
    //const { user } = useUserAuth();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        fetch(`https://twitter-clone-backend-ruby.vercel.app/loggedInUser?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log('from useLoggedinuser', data)
                setLoggedInUser(data)
            })
    }, [email, loggedInUser])

    return [loggedInUser, setLoggedInUser];
}

export default useLoggedInUser