import { getFirestore } from "firebase/firestore";
import initializeAuthentication from "./firebase-init";
initializeAuthentication()
export default getFirestore()