import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

function Auth(props: any) {

  const { setIsAuth } = props;

  async function signInWithGoogle() {
    try {    
      const result = await signInWithPopup(auth, provider);
      cookies.set('auth-token', result.user.refreshToken);
      setIsAuth(true);
    } catch (e) {
      throw new Error('Error signing in with Google');
    }
  }

  return (
    <div className="auth">
      <h1>Sign In With Google</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default Auth;