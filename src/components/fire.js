import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyDS4K19SiKj3JFMCOyod1AB9Cp94wu2ocs",
    authDomain: "casa-bbf7f.firebaseapp.com",
    databaseURL: "https://casa-bbf7f.firebaseio.com",
    projectId: "casa-bbf7f",
    storageBucket: "casa-bbf7f.appspot.com",
    messagingSenderId: "469089784949"
};
var fire = firebase.initializeApp(config);
export default fire;