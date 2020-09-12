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
import { Doughnut } from 'react-chartjs-2';

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

function createData(amount, source) {
  return { amount, source };
}
const rows = [
  createData(100, 'Expense 1'),
  createData(600, 'Expense 2'),
  createData(200, 'Expense 1'),
  createData(202, 'Expense 2'),
  createData(700, 'Expense 1'),
];

const Expenses = () => {
   const [data,setData] = useState({
    labels: ['Rent/Mortgage', 'Food', 'Phone Bill',
             'Misc.'],
    datasets: [
      {
        label: 'Expenses Chart',
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

    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Card variant="outlined">
          <Doughnut data={data} />

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
                  $2000.0
            </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Total Expenses
            </Typography>
              </CardContent>
            </Card>


          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardHeader
                title="Income"
              />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Amount ($)</TableCell>
                        <TableCell align="center">Source</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.amount}>
                          <TableCell component="th" scope="row">
                            {row.amount}
                          </TableCell>
                          <TableCell align="center">{row.source}</TableCell>
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

export default Expenses