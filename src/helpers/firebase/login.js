import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	setPersistence,
	browserSessionPersistence,
	onAuthStateChanged,
} from "firebase/auth";

async function login(email, password) {
	const auth = getAuth();
	try {
		await setPersistence(auth, browserSessionPersistence);
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return userCredential.user;
	} catch (error) {
		return error.message;
	}
}

async function logOut() {
	const auth = getAuth();
	try {
		await signOut(auth);
	} catch (error) {
		return error.message;
	}
}

function isAuth() {
	return new Promise(resolve => {
		const auth = getAuth();
		onAuthStateChanged(auth, user => {
			resolve(!!user);
		});
	});
}

export { login, logOut, isAuth };
