import React from "react";
import { useContext } from "react";
import { AppBar, Grid, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from "..";
const NavBar = () => {
   const {auth} = useContext(Context)
   const [user] = useAuthState(auth)
  
  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar>
        <h1 style={{color:'blue'}}>ReactChat</h1>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()}variant="outlined">Sign out</Button>
          ) : (
            <Link to={LOGIN_ROUTE}> <Button variant="outlined">Login</Button></Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
