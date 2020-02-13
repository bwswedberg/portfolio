import React, { useState, createRef } from 'react';
import Lightbox from 'react-image-lightbox';
import { makeStyles, Theme, createStyles, Typography, Button } from '@material-ui/core';
import classnames from 'classnames';
import ProjectLightbox from './ProjectLightbox';

interface Props {
  project: any;
  i: number;
}

// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

export default ({ project, i }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const classes = useStyles();
  const setRootRef = (element) => {
    console.log(element);
  };

  return (
    <div className={classes.root} ref={setRootRef}>
      <div className={classnames('row', i % 2 && 'flex-row-reverse')}>
        <div className="col-12 col-xl-6">
          <div 
            className={classes.thumbnail} 
            style={{
              backgroundImage: `url(${project.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(0.8)',
            }}
            onClick={() => setIsLightboxOpen(true)}
          />
        </div>
        <div className="col-12 col-xl-6 align-self-center">
          <div className={classes.content}>
            <Typography 
              className={classes.title} 
              color="textSecondary" 
              variant="overline"
              display="block"
            >{project.title}</Typography>
            <Typography 
              className={classes.lead} 
              color="textPrimary" 
              variant="h6"
            >{project.lead}</Typography>
            <Typography 
              className={classes.paragraph} 
              variant="body2"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            <Button 
              variant="outlined" 
              color="secondary"
              onClick={() => setIsLightboxOpen(true)}
            >MORE</Button>
          </div>
        </div>
      </div>
      { isLightboxOpen && (
        <ProjectLightbox 
          items={project.images} 
          onCloseRequest={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
  },
  thumbnail: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 500,
    maxHeight: 310,
    height: 310,
    position: 'relative',
    marginBottom: theme.spacing(3),
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 5,
      right: -10,
      bottom: -10,
      left: 5,
      zIndex: -1,
      backgroundColor: theme.palette.secondary.main,
    },
  },
  content: {
    maxWidth: 500,
  },
  title: {
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    lineHeight: '1.1em',
    marginBottom: theme.spacing(1),
    // fontWeight: 400,
    // fontWeight: 'bold',
  },
  lead: {
    marginBottom: theme.spacing(1),
    lineHeight: '1.2em',
  },
  paragraph: {
    marginBottom: theme.spacing(2)
  },
}));
