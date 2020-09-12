import React, { useState } from 'react'
import Login from './Login'
import Logo from '../../../assets/Frame 1.svg'
import Signup from './Signup'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
  const classes = useStyles();
  const [registered, setRegistered] = useState(true)

  return (
    <Grid container>
      <Grid item xs={5}>
      <img className={classes.logo}src={Logo} alt="webiste logo"></img> 
      </Grid>
      <Grid item xs={7}>
       {registered? <Login registered={registered} setRegistered={setRegistered}/>: <Signup registered={registered} setRegistered={setRegistered}/>}      
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  logo:{
    marginLeft: "200px",
    marginTop: "200px"
  }
}));

export default Home;