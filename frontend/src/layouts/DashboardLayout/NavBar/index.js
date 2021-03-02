import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  // Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobtitle: 'Artist',
  name: 'Vishaalaakshi Vallesha'
};

const items = [
  {
    href: ' ',
    icon: '',
    title: ''
  },
  {
    href: '#home ',
    icon: '',
    title: 'Home'
  },
  {
    href: '#gallery ',
    icon: '',
    title: 'Gallery'
  },

  {
    href: '#about',
    // icon: ShoppingBagIcon,
    title: 'About'
  },
  {
    href: '#social',
    // icon: UserIcon,
    title: 'Social'
  },
  {
    href: '#contact',
    // icon: SettingsIcon,
    title: 'Contact'
  },

];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 296,
    top: 0,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 74,
    height: 74,
    marginBottom: 14
  },
  box: {
    margin: '5px 25px'
  },
  item: {
    fontSize: '18px',
    textDecoration: 'none'
  },
  sec: {
    color: theme.palette.text.tri
  }

}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);


  const content = (
    <Box
      mt={1}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}

          src={user.avatar}

        />

        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography
          className={classes.sec}
          color="textTri"
        // s
        >
          {user.jobtitle}
        </Typography>

      </Box>
      {/* <Divider /> */}
      <Box p={2} className={classes.box}>
        <List>
          {items.map((item) => (
            <NavItem
              className={classes.item}
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />

    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
