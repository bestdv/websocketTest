import React from 'react';
import { useState } from 'react';
import { StompClient } from '@stomp/stompjs';
// import CssBaseline from '@material-ui/core/CssBaseline';

import {
  StompSessionProvider,
  useStompClient,
  useSubscription,
  withStompClient,
  withSubscription,
} from 'react-stomp-hooks';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

function App() {
  function SubscribingComponent() {
    const [lastMessage, setLastMessage] = useState('No message received yet');

    //Subscribe to /topic/test, and use handler for all received messages
    //Note that all subscriptions made through the library are automatically removed when their owning component gets unmounted.
    //If the STOMP connection itself is lost they are however restored on reconnect.
    //You can also supply an array as the first parameter, which will subscribe to all destinations in the array
    useSubscription('/topic/test', (message) => setLastMessage(message.body));

    return <div>Last Message: {lastMessage}</div>;
  }

  function SendingMessages() {
    const [input, setInput] = useState('');
    const [lastMessage, setLastMessage] = useState('No message received yet');

    //Get Instance of StompClient
    //This is the StompCLient from @stomp/stompjs
    const stompClient = useStompClient();
    useSubscription('/user/queue/echoreply', (message) =>
      setLastMessage(message.body)
    );

    const sendMessage = () => {
      //Send Message
      stompClient.publish({
        destination: '/app/echo',
        body: 'Echo ' + input,
      });
    };

    return (
      <Grid container direction="row" spacing={3}>
        <Grid item>
          <Button variant={'contained'} onClick={sendMessage}>
            Send Message
          </Button>
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography variant={'body1'}>
            Last Message received: {lastMessage}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    //Initialize Stomp connection, will use SockJS for http(s) and WebSocket for ws(s)
    //The Connection can be used by all child components via the hooks or hocs.
    <StompSessionProvider
      //url={'http://192.168.120.6:8080/app/monitoring/graph'}
      url={'https://stream.elite12.de/api/sock'}
      //All options supported by @stomp/stompjs can be used here
    >
      <SubscribingComponent />
      {/* <Showcase title={'Sending Messages'}> */}
      <SendingMessages />
      {/* </Showcase> */}
    </StompSessionProvider>
  );
}
export default App;
