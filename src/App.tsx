import './styles/App.css';
import Game from './pages/Game';
import Auth from './components/Auth';
import Room from './components/Room';
import { useState } from 'react';
import { Cookies } from 'react-cookie';

function App() {

  const cookies = new Cookies();

  const [isAuth, setIsAuth] = useState<boolean>(cookies.get('auth-token') ? true : false);
  
  if (isAuth) {
    return (
      <div className="App">
        <Game />
        <Room setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="App">
      <Auth setIsAuth={setIsAuth} />
    </div>
  );
}

export default App;