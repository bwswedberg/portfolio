import React, { useState, createRef } from 'react';
import ReactMarkdown from 'react-markdown';
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

  return (
    <div className={classes.root}>
      <div className={classnames('row', i % 2 && 'flex-row-reverse')}>
        <div className="col-12 col-xl-6">
          <div className={classes.thumbnailContainer}>
            <img
              className={classes.thumbnail} 
              src={project.thumbnail.src}
              onClick={() => setIsLightboxOpen(true)}
            />
            <div className={classes.thumbnailBackground}></div>
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
            {/* <Typography 
              className={classes.paragraph} 
              variant="body2"
            >{project.description} Built with {project.tech}.</Typography> */}
            <ReactMarkdown
              source={`${project.description} Built with ${project.tech}.`}
              renderers={{
                paragraph: p => <Typography {...p} className={classes.paragraph} variant="body2" />
              }} />
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
    position: 'relative',
    display: 'inline-block',
    marginBottom: theme.spacing(3),
  },
  thumbnail: {
    maxWidth: 500,
    width: '100%',
    maxHeight: 260,
    cursor: 'pointer',
    backgroundColor: theme.palette.background.paper,  
    // 'transition': 'transform 500ms',
    // border: '1px solid rgba(255,255,255,0.01)',
    // '&:hover': {
    //   transform: 'translate(10px,10px)'
    // }, 
  },
  thumbnailBackground: {
    position: 'absolute',
    top: 0,
    // top: 10,
    // right: -10,
    // bottom: -10,
    // left: 10,
    zIndex: -1,
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
    transform: 'translate(10px,10px)'
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
    marginBottom: theme.spacing(2),
    '& a': {
      color: theme.palette.secondary.light,
    },
  },
}));
