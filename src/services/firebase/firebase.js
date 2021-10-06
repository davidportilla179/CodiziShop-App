// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const getFirebase = () => app;
export const db = getFirestore(app);

// { id: 1, title: "T-shirt", category: "tshirts", description: "Its a tshirt", stock: 10, price: "$299.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/machine_learning_tshirt_2.jpg" },
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db,'items'))
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()};
          });
          resolve(products);
        })
        .catch(err => reject('Error searching items', err))
        .finally(() => console.log('Finally'));
  });
};

export const getProductsbyCategory = (category) => {
  return new Promise((resolve, reject) => {
    getDocs(query(collection(db,'items'), where('category', '==', category)))
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()};
          });
          resolve(products);
        })
        .catch(err => reject('Error searching items', err))
        .finally(() => console.log('Finally'));
  });
};

