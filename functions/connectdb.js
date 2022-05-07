import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'; 
import myCredentials from './credentials.js'; 


export const connectDb = () => { 
if(getApps().length === 0) {
  initializeApp({
    credential: cert(myCredentials)
  });
}
return getFirestore();
};

