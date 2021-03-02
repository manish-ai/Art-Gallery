import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Hidden,
  IconButton,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from './NavBar';
// import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    // paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 296
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    paddingTop: 0,
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className={classes.root}>
      {/* <TopBar onMobileNavOpen= /> */}
      <div className="hidden-box">
        <Hidden lgUp>
          <IconButton
            color="light"
            className="box3"
            onClick={() => setMobileNavOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </div>
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
