import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { intialstate, reducer } from "../AddCart/productCart";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut,
	signInWithEmailAndPassword,
	sendPasswordResetEmail
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const [userProfile, setProfileUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [state, dispatch] = useReducer(reducer, intialstate);

	// signup method
	let createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const updateUser = (userInfo) => {
		return updateProfile(auth.currentUser, userInfo)
	}

	// signIn method
	let signIn = (data) => {
		return signInWithEmailAndPassword(auth, data.email, data.password)
	}

	// reset password or change password
	const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

	//  user are running here 
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			}
			setIsLoading(false)
		});
		return () => unSubscribe;
	})

	// logout method
	const logOut = () => {
		signOut(auth).then(() => {
			setUser({})
			window.location.reload()
		}).catch((error) => { });
	}

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1/getme/${user.email}`)
			.then(response => {
				setProfileUser(response?.data?.user)
			})
			.catch(err => { })
	}, [user?.email]);

	const values = {
		createUser,
		updateUser,
		user,
		resetPassword,
		setError,
		error,
		state,
		dispatch,
		isLoading,
		logOut,
		signIn,
		userProfile
	}

	return (
		<AuthContext.Provider value={values}>
			{children}
		</AuthContext.Provider>
	)
};

export default AuthProvider;