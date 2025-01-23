import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDoTrUa9prwfD5fnz8Iod_NI-Wyjlpoe1Q",
    authDomain: "derby-app-8b4c2.firebaseapp.com",
    projectId: "derby-app-8b4c2",
    storageBucket: "derby-app-8b4c2.firebasestorage.app",
    messagingSenderId: "547980224217",
    appId: "1:547980224217:web:c077c54de75b82b7f680c8",
    measurementId: "G-V0BTMY7PNY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };