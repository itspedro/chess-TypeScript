import './styles/App.css';
import Game from './pages/Game';
import Chat from './components/Chat';
import Auth from './components/Auth';
import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  if (isAuth) {
    return (
      <div className="App">
        <Game />
        <Chat />
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