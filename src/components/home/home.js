import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './home.module.scss';

const Home = () => (
  <Container maxWidth={false} disableGutters>
    <Box className={styles.homeBox}>
      <Grid className={styles.homeBox__gridContainer} container justify='center' alignItems='center'>
        <Grid item xs={12} sm={6}>
          <Box className={styles.coronaBox} ml={4} mr={4} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box p={2}>
            <Typography className={styles.typography} variant='h2' component='h1' gutterBottom>
              Coronavirus disease 2019 (COVID-19)
            </Typography>

            <Typography className={styles.typography} variant='subtitle1' gutterBottom> 
              This is a contagious disease caused by severe acute respiratory syndrome coronavirus 2. The first case was identified in Wuhan, China, in December 2019. It has since spread worldwide, leading to an ongoing pandemic.
            </Typography>

            <Button classes={{
              root: styles.moreInfoButton
            }} variant='outlined' href='https://en.wikipedia.org/wiki/Coronavirus_disease_2019' target='_blank'>
              More Details
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
)

export default Home
