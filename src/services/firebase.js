import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAuWR-xaPFpzWgEYVGUhrOB1pNssUAqdNM",
    authDomain: "gb-messenger-ff23d.firebaseapp.com",
    projectId: "gb-messenger-ff23d",
    storageBucket: "gb-messenger-ff23d.appspot.com",
    messagingSenderId: "6768700699",
    appId: "1:6768700699:web:56b2e07577325cf1ceb7be"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export function signup(email, password) {
    // console.log(email, password);
    return auth().createUserWithEmailAndPassword(email, password);
};

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
};