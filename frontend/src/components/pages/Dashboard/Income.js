import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      backgroundColor: green[500],
    },
    table: {
      minWidth: 650,
    },
  });

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const Income = () => {
    const classes = useStyles();
  
    return (
      <div>
              <Card className={classes.root} variant="outlined">
          <CardHeader
            avatar={
          <Avatar aria-label="dollar logo" className={classes.avatar}>
            $
          </Avatar>
        }
      />
        <CardContent>
          <Typography variant="h5" component="h2">
            $700.68
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Total Income
          </Typography>
        </CardContent>
      </Card>
      
      </div>
      

      
    );
}

export default Income;