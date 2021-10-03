import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAujGxbcOYL7bpwfkZCmQlrJh-i_DC-wUs",
    authDomain: "login-with-firebase-41c24.firebaseapp.com",
    projectId: "login-with-firebase-41c24",
    storageBucket: "login-with-firebase-41c24.appspot.com",
    messagingSenderId: "761440700734",
    appId: "1:761440700734:web:543f2494b9e044cfd0c46f"
  };

 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;