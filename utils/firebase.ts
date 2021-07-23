import firebase from 'firebase';
import { firebaseConfig } from '../firebaseConfig';

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const nowSecond = () => firebase.firestore.Timestamp.now().seconds;

export { db, app, firebase, nowSecond };
