import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default async function signOutUser(){
  await signOut(auth);
  cookies.remove('auth-token');
}