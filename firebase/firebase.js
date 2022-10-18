/** class to create user and login */
import app from './config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const firebase = {
  auth: {
    crearUsuario: async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password)
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

    },
    loginUsuario: async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
    }
  }
}
export default firebase;


