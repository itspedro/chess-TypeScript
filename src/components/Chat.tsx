import '../styles/Chat.css';
import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, DocumentData } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface ChatProps {
  room: string;
}

function Chat(props: ChatProps) {

  const { room } = props;

  const [messages, setMessages] = useState<DocumentData[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    const queryMessages = query(
      collection(db, 'messages'),
      where('room', '==', room),
      orderBy('createdAt', 'asc'),
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      const messages = data.map((msg) => msg);
      setMessages(messages);
    });

    return () => unsubscribe();

  }, [room]);


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!newMessage || newMessage === '') return;

    await addDoc(collection(db, 'messages'), {
      message: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      room,
    });

    setNewMessage('');
  };

  return (
    <div className="chat-app">    
      <h1>Chat</h1>
      <div className="messages">
        {messages.map((message, i) => (
          <div key={i} className="message-content">
            <span className="user">{message.user}</span>
            <span className="message">{message.message}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input 
          className="new-message-input"
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="btn send">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
