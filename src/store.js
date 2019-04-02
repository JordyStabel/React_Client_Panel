import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// Reducers
// @TODO

const firebaseConfig = {
  apiKey: "AIzaSyAx0JioFjl2EYJBgh0pvvl-jrWzJb_Olgs",
  authDomain: "react-client-panel-ae4fc.firebaseapp.com",
  databaseURL: "https://react-client-panel-ae4fc.firebaseio.com",
  projectId: "react-client-panel-ae4fc",
  storageBucket: "react-client-panel-ae4fc.appspot.com",
  messagingSenderId: "891124160532"
};

const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);

// Init firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, reactReduxFirebaseConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
