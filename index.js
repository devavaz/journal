/* === Imports === */

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

/* === Firebase Setup === */

const firebaseConfig = {
  apiKey: "AIzaSyC3xXgMNdXH1Xl931yVhSRzAhKhefUHbPA",
  authDomain: "journal-7c7cb.firebaseapp.com",
  projectId: "journal-7c7cb",
  storageBucket: "journal-7c7cb.appspot.com",
  messagingSenderId: "687691488513",
  appId: "1:687691488513:web:aa63a75f744139768dcf00",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log(auth);

/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view");
const viewLoggedIn = document.getElementById("logged-in-view");

const signInWithGoogleButtonEl = document.getElementById(
  "sign-in-with-google-btn"
);

const emailInputEl = document.getElementById("email-input");
const passwordInputEl = document.getElementById("password-input");

const signInButtonEl = document.getElementById("sign-in-btn");
const createAccountButtonEl = document.getElementById("create-account-btn");
const signOutButtonEl = document.getElementById("sign-out-btn")


/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle);
signInButtonEl.addEventListener("click", authSignInWithEmail);
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail);
signOutButtonEl.addEventListener("click", authSignOut)




/* === Main Code === */

showLoggedOutView();

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
  console.log("Sign in with Google");
}

function authSignInWithEmail() {
  const email = emailInputEl.value;
  const password = passwordInputEl.value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    clearAuthFields()
    showLoggedInView();
  })
  .catch((error) => {
    console.log(error);
  });
    
}

function authCreateAccountWithEmail() {
  const email = emailInputEl.value;
  const password = passwordInputEl.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      clearAuthFields()  
      showLoggedInView();
    })
    .catch((error) => {
      console.log(error);
    });
}

function authSignOut() {
    signOut(auth).then(() => {
        showLoggedOutView();
      }).catch((error) => {
       console.log(error);
      });
}


/* == Functions - UI Functions == */

function showLoggedOutView() {
  hideElement(viewLoggedIn);
  showElement(viewLoggedOut);
}

function showLoggedInView() {
  hideElement(viewLoggedOut);
  showElement(viewLoggedIn);
}

/* == Functions - UI - Element Manipulation == */

function showElement(element) {
  element.style.display = "flex";
}

function hideElement(element) {
  element.style.display = "none";
}

function clearInputField(field) {
	field.value = ""
}

function clearAuthFields() {
	clearInputField(emailInputEl)
	clearInputField(passwordInputEl)
}