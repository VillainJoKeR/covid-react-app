import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './backdrop.module.scss';

const BackDrop = () => (
  <Backdrop  open={true}>
    <CircularProgress color="inherit" />
  </Backdrop>
)

export default BackDrop
