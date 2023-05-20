import { useState } from 'react';

function Chat() {

  const [room, setRoom] = useState<string | null>(null);

  return (
    <div>    
      {room ? (
        <div>
          <h1>Chat</h1>
          <button onClick={() => setRoom(null)}>Back</button>
          <p>Room: {room}</p>
        </div>
      ) : (
        <div>
          <h1>Chat</h1>
          <button onClick={() => setRoom('global')}>Global</button>
          <button onClick={() => setRoom('room1')}>Room 1</button>
          <button onClick={() => setRoom('room2')}>Room 2</button>
        </div>
      )}
    </div>
  );
}

export default Chat;
