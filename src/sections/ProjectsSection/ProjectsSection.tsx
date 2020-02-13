import React, { useState } from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme, Button} from "@material-ui/core";
import classnames from 'classnames';

import SectionTitle from '../SectionTitle';
import ProjectLightbox from './ProjectLightbox';
import Project from './Project';

export default ({ className }) => {
  const [selectedProject, setSelectedProject] = useState();
  const classes = useStyles();
  return (
    <section className={classnames(classes.root, className)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes.titleContainer}>
              <SectionTitle title="After Hours" />
            </div>
          </div>
        </div>
        { projects.map((d, i) => (
          <div className={classes.project} key={d.id}>
            <Project project={d} i={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    
  },
  titleContainer: {
    marginBottom: theme.spacing(8),
  },
  project: {
    marginBottom: theme.spacing(10),
  },
}));

const projects = [
  {
    id: 'bible-reading-plans',
    title: 'Read Through the Bible',
    lead: 'Discover, use, and create Bible reading plans',
    thumbnail: '/projects/bible-reading-plans/thumbnail.png',
    images: [
      { 
        src: '/projects/apartment-reporter/thumbnail.png',
      },
    ]
  },
  {
    id: 'apartment-reporter',
    title: 'Apartment Reporter',
    lead: 'Scraping the web for the apartment next door',
    thumbnail: '/projects/apartment-reporter/thumbnail.png',
    images: [
      { 
        src: '/projects/apartment-reporter/thumbnail.png',
      },
    ]
  },
  {
    id: 'data-viz',
    title: 'Bl.ocks & ObservableHQ',
    lead: 'Data visualization experiments and proof of concepts',
    thumbnail: '/projects/data-viz/thumbnail.png',
    images: [
      { 
        src: '/projects/apartment-reporter/thumbnail.png',
      },
    ]
  },
  {
    id: 'perse',
    title: 'PerSE',
    lead: 'Geovisual analytics for multi-calendar environments',
    thumbnail: '/projects/perse/thumbnail.png',
    images: [
      { 
        src: '/projects/apartment-reporter/thumbnail.png',
      },
    ]
  },
  {
    id: 'spotvis',
    title: 'SPoTvis',
    lead: 'Exploring sentiment surrounding 2013 U.S. Government shutdown.',
    thumbnail: '/projects/spotvis/thumbnail.png',
    images: [
      { 
        src: '/projects/apartment-reporter/thumbnail.png',
      },
    ]
  },
];
