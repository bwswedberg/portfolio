import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme, Card, CardContent, CardActions, Button, TextField} from "@material-ui/core";
import classnames from 'classnames';
import SectionTitle from './SectionTitle';

export default function ContactSection({ className }) {
  const classes = useStyles();
  const formVariant = 'filled';
  return (
    <section className={classnames(classes.root, className)}>
      <div className="container">
        <div className="row">
          <div className="col">
          <Card className={classes.card}>
            <CardContent>
              <Typography 
                className={classes.title} 
                variant="subtitle1"

                color="textPrimary" 
                gutterBottom
              >
                Send me a message
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.textField}
                  id="name" 
                  label="Name"
                  variant={formVariant} 
                  fullWidth
                />
                <TextField 
                  className={classes.textField}
                  id="email" 
                  label="Email"
                  variant={formVariant} 
                  fullWidth
                />
                <TextField 
                  className={classes.textField}
                  id="message" 
                  label="Message"
                  variant={formVariant} 
                  fullWidth
                  multiline
                  rows="4"
                />
              </form>

            </CardContent>
            <CardActions>
              <Button 
                size="small"
                variant="outlined"
                color="secondary"
              >
                Send
              </Button>
            </CardActions>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
  card: {
    maxWidth: 500,
  },
  title: {

  },
  textField: {
    marginBottom: theme.spacing(2),
  }
}));
