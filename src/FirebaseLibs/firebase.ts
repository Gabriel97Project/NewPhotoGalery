import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import {getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID

    //aqui eu usei os dados do firebase que foram passados previamente para a variavel de ambiente,
    //a forma de usar "process.env." esta descrita no arquivo .env.local
  };
  


//usado como conexão ao firebase
export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

  //usado como conexão ao firebaseStorage, export é colocado somente no storage,
  //pois é  ele que sera usado para armazenar as photos
//AS INFORMAÇÕES DESTE ARQUIVO FORAM PASSADAS PRA VARIAVEL DE AMBIENTE.ENV.LOCAL