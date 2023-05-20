import '../styles/Room.css';
import { useState } from 'react';
import Chat from './Chat';
import signOutUser from '../app/signOut';

function Room(props: any) {
  const [room, setRoom] = useState<string | null>(null);
  const { setIsAuth } = props;

  return (
    <>
      <div className="sign-out">
        <button className="btn" onClick={() => {
          signOutUser;
          setRoom(null);
          setIsAuth(false);
        }} >Sign-Out</button>
      </div>
      <div className='Room-Content'>
        {room !== null ? (
          <div className="Room-Current">
            <h1>Current Room: {room.toUpperCase()}</h1>
            <button className="btn" onClick={() => setRoom(null)}>Back</button>
            <Chat room={room} />
          </div>
        ) : (
          <div className="Room-Select">
            <h1>Enter a Room</h1>
            <button className="btn" onClick={() => setRoom('global')}>Global</button>
            <button className="btn" onClick={() => setRoom('room1')}>Room 1</button>
            <button className="btn" onClick={() => setRoom('room2')}>Room 2</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Room;
