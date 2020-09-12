import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import { spacing } from '@material-ui/system';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonIcon from '@material-ui/icons/Person';
import Income from './Income'
import Summary from './Summary';
import Profile from './Profile';
import Budget from './Budget'
import Expenses from './Expenses'
import Resources from './Resources'
import Button from '@material-ui/core/Button';
import Goals from './Goals'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [tab,setTab] = useState(5);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ListItem button aria-label="profile" p={2}>
          <ListItemIcon>
          <Avatar className={classes.green}>NU</Avatar>
          </ListItemIcon>
          <ListItemText primary="Naruto Uzumaki" />
        </ListItem>
      <Divider />
      <List component="nav" aria-label="main menu">
        <ListItem button onClick={()=>{setTab(1)}}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Summary" />
        </ListItem>
        
        <ListItem button  onClick={()=>{setTab(2)}}>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Budget"  />
        </ListItem>

        <ListItem button  onClick={()=>{setTab(3)}}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Income" />
        </ListItem>

        <ListItem button onClick={()=>{setTab(4)}}>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Expenses" />
        </ListItem>

        <ListItem button onClick={()=>{setTab(5)}}>
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>

        <ListItem button onClick={()=>{setTab(6)}}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <Divider />
      </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  

  const renderView = () => {
    if(tab == 1) { 
      return <Summary />
    }
    if(tab == 2){
      return <Budget />
    }
    if(tab == 3){
      return <Income/>
    }
    if(tab == 4) { 
      return <Expenses />
    }
    if(tab == 5){
      return <Resources/>
    }
    if(tab == 6){
      return <Profile/>
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: '#4caf50' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Eat. Learn. Play. Plan.
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderView()}
      </main>
    </div>
  );
}


export default Dashboard;
