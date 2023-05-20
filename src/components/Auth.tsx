import signInWithGoogle from '../app/signInWithGoogle';

function Auth() {
  return (
    <div className='auth'>
      <h1>Sign In With Google</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default Auth;