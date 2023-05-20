import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  return result;
}

export default signInWithGoogle;