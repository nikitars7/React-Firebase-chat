import { Box, Container, Grid ,Button} from '@mui/material'
import React, { useContext } from 'react'
import styles from '../styles/login.module.scss';
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { Context } from '..'
const Login = () => {
   const {auth} = useContext(Context)

   const login = async() => {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
      .then((result) => console.log(result))
   }
  return (
    <Container>
      <Grid container className={styles.Grid}>
         <Grid className={styles.ButtonGrid}>
            <Box p={5}>
               <Button onClick={login} variant='outlined'>Sign in with Google</Button>
            </Box>
         </Grid>
      </Grid>
    </Container>
  )
}

export default Login