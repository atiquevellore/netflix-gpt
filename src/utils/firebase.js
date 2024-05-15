// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAQYHqOxY2G1FmVEkNg1rJ5nsWlDCGyZwo",
	authDomain: "netflixgpt-8b8ae.firebaseapp.com",
	projectId: "netflixgpt-8b8ae",
	storageBucket: "netflixgpt-8b8ae.appspot.com",
	messagingSenderId: "1095047638245",
	appId: "1:1095047638245:web:f309011202a4a3d5f5b80c",
	measurementId: "G-9HM5TD6TTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
