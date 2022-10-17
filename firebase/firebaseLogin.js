import app from './config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const firebaseLogin = {
    auth: {
        loginUsuario: async (email, password) => {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(userCredential)
              return user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
          
        }

     }

}

export default firebaseLogin;

