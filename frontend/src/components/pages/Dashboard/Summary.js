import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import { Doughnut } from 'react-chartjs-2';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    textAlign: 'center',

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

const Summary = () => {
  const [data, setData] = useState({
    labels: ['Work 1', 'Work 2', 'Scholarship',
      'Allowance'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#ffadad',
          '#a0c4ff',
          '#bdb2ff',
          '#CAFFBF'
        ],
        hoverBackgroundColor: [
          '#FF8585',
          '#70A7FF',
          '#9985FF',
          '#99FF85'
        ],
        data: [65, 59, 80, 81]
      }
    ]
  })

  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                $700.68
            </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Budget
            </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                $700.68
            </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Total Income
            </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                $700.68
            </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Total Expenses
            </Typography>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>

        <Grid item xs={6}>
          <Card variant="outlined">
            <CardHeader
              title="Income"
            />
            <Divider />
            <CardContent>
              <Doughnut data={data} />

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardHeader
              title="Expenses"
            />
            <Divider />
            <CardContent>
              <Doughnut data={data} />

            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  );


}

export default Summary