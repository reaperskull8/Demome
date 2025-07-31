// firebase-config.js

// Import langsung dari CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Konfigurasi dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCK5y_49Jkir4zXlnFGPuKuKtlR043vTV8",
  authDomain: "msi-order.firebaseapp.com",
  projectId: "msi-order",
  storageBucket: "msi-order.firebasestorage.app",
  messagingSenderId: "44636534269",
  appId: "1:44636534269:web:e737e1771744fd92bcd594",
  measurementId: "G-SLSE0SLFBH"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Export service utama
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
