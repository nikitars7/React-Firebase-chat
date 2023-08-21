import React from "react";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  serverTimestamp,collection, addDoc, orderBy, query,getFirestore } from '@firebase/firestore';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "..";
import Loader from "./Loader";
import {
  Box,
  Container,
  Grid,
  Button,
  TextField,
  ButtonBase,
  Avatar
} from "@mui/material";
import styles from "../styles/chat.module.scss";
const Chat = () => {
  const { auth,app, firestore } = useContext(Context);
  const db = getFirestore(app);
  const messagesColection = collection(db, "messages")
    const queryMessages = query(messagesColection, orderBy("createdAt"));
    const [messages, loading] = query(useCollectionData(queryMessages, orderBy('createdAt')))
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const sendMessage = async () => {
    
   await addDoc(messagesColection,{
    displayName:user.displayName,
    uid:user.uid,
    photoUrl:user.photoURL,
    text:value,
    dateNow: new Date().toLocaleTimeString(),
    createdAt:serverTimestamp()
   })
   setValue('')
  };
  console.log(messages)
  if(loading){
   return <Loader/>
  }
  return (
    <Container className={styles.Container}>
      <Grid container className={styles.Grid} direction={'column'} gap={5}>
        <div className={styles.Chat}>
          {messages.map(message => 
            <div style={{
              margin:10,
              border:user.uid === message.uid ? '2px solid gray' : '2px solid blue',
              marginLeft:user.uid === message.uid ? 'auto' : '10px',
              borderRadius: '10px',
              padding:'10px',
              width:'fit-content',
              display:'flex',
              flexDirection:'column',
              gap:'5px',
            }}> 
              <Grid container sx={{alignItems:"center"}}>
                <Avatar sx={{ bgcolor:'blue',mr:0.5}}>{message.displayName.slice(0,1)}</Avatar>
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
              <span style={{color:'gray',alignSelf:'flex-end'}}>{message.dateNow?.slice(0,5)}</span>
            </div>)}
        </div>
        <Grid
           gap={2}
          container
          direction={"column"}
          justifyContent={"flex-end"}
          className={styles.TextField}
        >
          <TextField
            value={value}
            onChange={handleInput}
            fullWidth
            maxRows={2}
            variant={"outlined"}
            className={styles.Text}
          />
          <Button onClick={sendMessage} className={styles.Button} variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
