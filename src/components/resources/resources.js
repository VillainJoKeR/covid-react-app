import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GoogleImage1 from '../../assets/images/google-image-1.png';
import GoogleImage2 from '../../assets/images/google-image-2.jpg';
import GoogleImage3 from '../../assets/images/google-image-3.jpg';
import styles from './resources.module.scss';

const Resources = () => (
  <Container maxWidth={false}>
    <Box className={styles.resourcesBox} pt={8} pb={8}>
      <Grid container justify='space-between' alignItems='center' spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className={styles.card}>
            <CardActionArea href='https://play.google.com/store/apps/details?id=com.google.android.apps.health.research.studies' target='_blank'>
              <CardMedia
                className={styles.card__media}
                image={GoogleImage1}
                title='Google Health Studies'
              />
              
              <CardContent>
                <Typography gutterBottom variant='h6' component='h2' className={styles.card__header}>
                  Google Health Studies App
                </Typography>
                
                <Typography variant='body2' color='textSecondary' component='p' className={styles.card__description}>
                  Take one minute a week to help your community and join a respiratory health study - right from your phone
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button className={styles.card__linkButton} size='small' color='primary' href='https://play.google.com/store/apps/details?id=com.google.android.apps.health.research.studies' target='_blank'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card className={styles.card}>
            <CardActionArea href='https://www.google.com/covid19/exposurenotifications/' target='_blank'>
              <CardMedia
                className={styles.card__media}
                image={GoogleImage2}
                title='Google Apple Partnership'
              />
              
              <CardContent>
                <Typography gutterBottom variant='h6' component='h2' className={styles.card__header}>
                  Exposure Notifications System
                </Typography>
                
                <Typography variant='body2' color='textSecondary' component='p' className={styles.card__description}>
                  Google and Apple are partnering on a joint effort toenable the use of Bluetooth technology to helpgovernments and health agencispread ofthe virus, with user privacycentral tothe design.     
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button className={styles.card__linkButton} size='small' color='primary' href='https://www.google.com/covid19/exposurenotifications/' target='_blank'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Card className={styles.card}>
            <CardActionArea href='https://www.google.com/search?q=remote+jobs&ibp=htl;jobs&rciv=jb#fpstate=tldetail&htivrt=jobs&htidocid=fNgPrd4ZWJCY6-tLAAAAAA%3D%3D' target='_blank'>
              <CardMedia
                className={styles.card__media}
                image={GoogleImage3}
                title='Job Oppurtunities'
              />
              
              <CardContent>
                <Typography gutterBottom variant='h6' component='h2' className={styles.card__header}>
                  Find Job Oppurtunities
                </Typography>
                
                <Typography variant='body2' color='textSecondary' component='p' className={styles.card__description}>
                  Explore employment opportunities, including remote work openings.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button className={styles.card__linkButton} size='small' href='https://www.google.com/search?q=remote+jobs&ibp=htl;jobs&rciv=jb#fpstate=tldetail&htivrt=jobs&htidocid=fNgPrd4ZWJCY6-tLAAAAAA%3D%3D' target='_blank'>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Container>
)

export default Resources
