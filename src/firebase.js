import firebase from 'firebase'
import Vue from 'vue'
require('firebase/firestore')
const config = {
    apiKey: "AIzaSyC6zn9diJ0GR_vxnq-J_kDaisfoKcDvN_g",
    authDomain: "e-attendance-6840d.firebaseapp.com",
    databaseURL: "https://e-attendance-6840d.firebaseio.com",
    projectId: "e-attendance-6840d",
    storageBucket: "e-attendance-6840d.appspot.com",
    messagingSenderId: "448078364089",
    appId: "1:448078364089:web:e4b23ae2135b3aa6c88a68"
  };
  
firebase.initializeApp(config);
Vue.prototype.$firebase = firebase
export default firebase
