import "Assets/css/style.css"; // Main CSS style
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS style
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap icons


// Boot sequence
import "Js/boot/";

import auth from "Js/auth"
import settings from "Js/settings";


if (auth.isLogged()) {

  settings.save()
    .then(() => {
      console.log ("Success")
    })
    .catch((error) => {
      console.error(error)
    })

}



/*
import { db } from "Js/firebase"
import auth from "Js/auth";



console.log(auth.userId());
console.log(db);

import { doc, addDoc, setDoc, onSnapshot } from "firebase/firestore";

const docRef = doc(db, "settings", `${auth.userId()}`);

const unsub = onSnapshot(docRef, (doc) => {
  const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
  console.log(source, "Current data: ", doc.data());
});


setTimeout(() => {
  
  setDoc(doc(db, "settings", `${auth.userId()}`), {
    direction: "down",
    duration: 30,
  });

}, 2000)


const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

*/