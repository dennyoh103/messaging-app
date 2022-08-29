import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message';
// import db from './firebase';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  // useEffect(() => {
  //   db.collection('messages').onSnapshot(snapshot => {
  //     setMessages(snapshot.docs.map(doc => doc.data()))
  //   }) 
  // }, [])


  useEffect(() => {
    //code to run
    setUsername(prompt('whats your name?'));
  }, []) //based on this condition. 

  const sendMessage = (event) => {
    //all the logic to send messages
    event.preventDefault();
    setMessages([...messages, { username: username, message: input }]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Instant Messenger</h1>
      <h2>Welcome {username}</h2>

      <form class="app__form">
        <FormControl>
          <InputLabel>Enter a Message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
