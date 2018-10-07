import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAaFbKZO_84pbVG7uo5g0KnxBLXRMz6s-M",
  authDomain: "zcatchoftheday.firebaseapp.com",
  databaseURL: "https://zcatchoftheday.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
