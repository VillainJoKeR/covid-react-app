import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ContactForm from '../contact-form';
import styles from './contact.module.scss';

const Contact = () => (
  <Container maxWidth={false}>
    <Box className={styles.container} pt={8} pb={8}>
      <Paper className={styles.container__paper} elevation={16}>
        <Box mb={4}>
          <Typography gutterBottom variant='h4' component='h2'>
            Subscribe to our newsletter
          </Typography>

          <Typography gutterBottom variant='body1'>
            Fill out the form to subscribe to our newsletter and stay updated on the latest news
          </Typography>
          </Box>

        <Divider variant='middle' />

        <Box mt={4}>
          <ContactForm />
        </Box>
      </Paper>
    </Box>
  </Container>
)

export default Contact
