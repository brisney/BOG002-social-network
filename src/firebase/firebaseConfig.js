var firebaseConfig = {
    apiKey: "AIzaSyAllPzqBaHUgT1LsDnGyueDRyIo7Mpzhv8",
    authDomain: "vikingos-22af4.firebaseapp.com",
    projectId: "vikingos-22af4",
    storageBucket: "vikingos-22af4.appspot.com",
    messagingSenderId: "369311508331",
    appId: "1:369311508331:web:fd177debbfaca087730e2e",
    measurementId: "G-7E4G30K1WZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();