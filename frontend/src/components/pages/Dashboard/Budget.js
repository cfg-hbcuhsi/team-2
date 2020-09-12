import React, { useState } from 'react';
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
import { Pie } from 'react-chartjs-2';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
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

function createData(amount, category) {
  return { amount, category };
}
const rows = [
  createData(210, 'Housing'),
  createData(500, 'Tuition'),
  createData(40, 'Transportation'),
  createData(20, 'Food'),
  createData(10, 'Utilities'),
  createData(300, 'Savings'),
  createData(100, 'Personal Spending'),
  createData(50, 'Recreation & Entertainment'),
  createData(32, 'Miscellaneous'),
];

const Budget = () => {
   const [data,setData] = useState({
    labels: ['Housing', 'Tuition','Transportation', 'Food',
             'Utilities', 'Savings', 'Personal Spending',
              'Recreation & Entertainment', 'Miscellaneous'],
    datasets: [
      {
        label: 'Budget Chart',
        backgroundColor: [
          '#FFADAD',
          '#FFD6A5',
          '#FDFFB6',
          '#CAFFBF',
          '#9BF6FF',
          '#A0C4FF',
          '#BDB2FF',
          '#FFC6FF',
          '#6C534E'

        ],
        hoverBackgroundColor: [
        '#6C534E',
        '#FFC885',
        '#FCFF99',
        '#AAFF99',
        '#70F3FF',
        '#85B4FF',
        '#BDB2FF',
        '#FFADFF'
        ,'#533F3C'
        ],
        data: [210, 500, 40, 20, 10, 300, 100, 50, 32]
      }
    ]
  })

  const classes = useStyles();

    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Card variant="outlined">
          <Pie data={data} />

            </Card>
          </Grid>
          <Grid item xs={6}
            >
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
                  $1262.0
            </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Total Budget
            </Typography>
              </CardContent>
            </Card>


          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardHeader
                title="Budget"
              />
              <Divider />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="budget table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Amount ($)</TableCell>
                        <TableCell align="right">Category</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.amount}>
                          <TableCell component="th" scope="row">
                            {row.amount}
                          </TableCell>
                          <TableCell align="right">{row.category}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>


          </Grid>
        </Grid>

      </div>
    );


}

export default Budget