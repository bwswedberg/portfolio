import React, { useState, createRef } from 'react';
import Lightbox from 'react-image-lightbox';
import { makeStyles, Theme, createStyles, Typography, Button } from '@material-ui/core';
import classnames from 'classnames';

import ProjectLightbox from './ProjectLightbox';
import { Project } from './projects';

interface Props {
  project: Project;
  i: number;
}

// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

export default ({ project, i }: Props) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const classes = useStyles();
  const setRootRef = (element) => {
    console.log(element);
  };

  return (
    <div className={classes.root} ref={setRootRef}>
      <div className={classnames('row', i % 2 && 'flex-row-reverse')}>
        <div className="col-12 col-xl-6">
          <div className={classes.thumbnailContainer}>
            <img
              className={classes.thumbnail} 
              src={project.thumbnail.src}
              onClick={() => setIsLightboxOpen(true)}
            />
          </div>
        </div>
        <div className="col-12 col-xl-6 align-self-center">
          <div className={classes.content}>
            <Typography 
              className={classes.title} 
              color="textSecondary" 
              variant="overline"
              display="block"
            >{project.type}</Typography>
            <Typography 
              className={classes.lead} 
              color="textPrimary" 
              variant="h6"
            >{project.title}</Typography>
            <Typography 
              className={classes.paragraph} 
              variant="body2"
            >{project.description} Built with {project.tech}.</Typography>
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
          project={project} 
          onCloseRequest={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
  },
  thumbnailContainer: {

  },
  thumbnail: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 500,
    width: '100%',
    maxHeight: 260,
    height: 260,
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
