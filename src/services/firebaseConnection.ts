import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import {FIREBASE} from '../../.env.json'

const firebaseConfig = {
    apiKey: FIREBASE.API_KEY,
    authDomain: FIREBASE.AUTH_DOMAIN,
    projectId: FIREBASE.PROJECT_ID,
    storageBucket: FIREBASE.STORAGE_BUCKET,
    messagingSenderId: FIREBASE.MESSAGING_SENDER_ID,
    appId: FIREBASE.APP_ID,
    measurementId: FIREBASE.MEASUREMENT_ID
  };

  if(!firebase.app.length){
      firebase.initializeApp(firebaseConfig)
  }

  export {firebase}