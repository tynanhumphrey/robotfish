import * as config from '../constants/config';

export default firebase.initializeApp({
    apiKey: config.FIREBASE_API_KEY,
    databaseURL: `https://${config.FIREBASE_PROJECT_ID}.firebaseio.com`,
    storageBucket: `${config.FIREBASE_PROJECT_ID}.appspot.com`,
    authDomain: `${config.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    messagingSenderId: config.FIREBASE_MESSENGER_ID,
    projectId: config.FIREBASE_PROJECT_ID
});
