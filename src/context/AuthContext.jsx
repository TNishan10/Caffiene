import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider(props){
    const {children} = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email, password) 
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    function logout(){
        setUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    const value = {globalUser, globalData, setGlobalData, isLoading, signUp, login, logout }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            // if there's no user, empty the user state and return from this listener

            if (!user){return}

            // there is user, then check if the user has data in the database, and if they do, then fetch said data and update the global state.

            try{
                setIsLoading(true)

                // first we create a reference for the document (labelled JSON object), then we get the doc and then we snapSHot it to see if theres anything there

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)

                let firebaseData = {}

                if (docSnap.exists()){
                    console.log("Found user data")
                    firebaseData = docSnap.data()
                }

                setGlobalData(firebaseData)

            } catch (err){
                console.log(err.message)

            } finally {
                setIsLoading(false)

            }
        })  
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}