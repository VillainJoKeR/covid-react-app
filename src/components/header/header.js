import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import styles from './header.module.scss';

const Header = () => (
  <AppBar color='transparent' elevation={0} position='static' classes={{
    root: styles.header
  }}>
    <Toolbar>
      <Link className={styles.link} to='/'>
        <IconButton edge='start' color='inherit' aria-label='home link'>
          <HomeIcon className={styles.homeIcon} />
        </IconButton>
      </Link>

      <Box className={styles.headerListContainer}>
        <Box className={styles.headerItem}>
          <Link className={styles.link} to='/resources'>
            <Typography variant='h6'>
              Resources
            </Typography>
          </Link>
          
        </Box>

        <Box className={styles.headerItem}>
          <Typography variant='h6'>
            News
          </Typography>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
)

export default Header
