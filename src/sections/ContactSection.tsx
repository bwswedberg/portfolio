import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme } from "@material-ui/core";
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import LinkedinIcon from 'mdi-material-ui/LinkedinBox';
import EmailIcon from 'mdi-material-ui/Gmail';
import GithubIcon from 'mdi-material-ui/GithubBox';

export default function ContactSection({ className }) {
  const classes = useStyles();
  return (
    <section className={classnames(className, classes.root)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row justify-content-center align-items-center">
              <div className="col-auto">
                <Typography 
                  variant="body1" 
                  gutterBottom
                >
                  Want to connect?
                </Typography>
              </div>
            </div>
            <div className={`row justify-content-center align-items-center ${classes.icons}`}>
              <div className="col-auto">
                <IconButton 
                  component="a" 
                  href="https://www.linkedin.com/in/bwswedberg" 
                  target="_blank" 
                  title="LinkedIn"
                >
                  <LinkedinIcon fontSize="large" />
                </IconButton>
              </div>
              <div className="col-auto">
                <IconButton 
                  component="a" 
                  href="mailto:bwswedberg@gmail.com" 
                  target="_blank" 
                  title="Email"
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </div>
              <div className="col-auto">
                <IconButton 
                  component="a" 
                  href="https://github.com/bwswedberg" 
                  target="_blank" 
                  title="Github"
                >
                  <GithubIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-auto">
                <Typography className={classes.copyright} variant="caption">
                  Created by Brian Swedberg &bull; Copyright {new Date().getFullYear()}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
  icons: {
    marginBottom: theme.spacing(10),
  },
  copyright: {
    marginBottom: theme.spacing(9),
  },
}));
