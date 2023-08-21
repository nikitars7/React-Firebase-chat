import React from "react";
import { useContext } from "react";
import { AppBar, Grid, Toolbar, Button ,Typography,Box} from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from "..";
const NavBar = () => {
   const {auth} = useContext(Context)
   const [user] = useAuthState(auth)
  return (
    <AppBar color={"primary"} position="static">
      <Toolbar >
      <Typography
            justifyContent={'flex-start'}
            variant="h4"
            component="div"
            sx={{ flexGrow: 1}}
          >
            ReactChat
          </Typography>
        <Grid justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()}variant={'contained'}>Sign out</Button>
          ) : (
            <Link to={LOGIN_ROUTE}> <Button variant={'contained'}>Login</Button></Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
