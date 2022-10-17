import app from './config';
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);
const firebaseLogout = {
    auth: {
        logOutUser: async (email, password) => {
            await signOut(auth, email, password)
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

export default firebaseLogout;
