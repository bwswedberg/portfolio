import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme, Button} from "@material-ui/core";
import classnames from 'classnames';
import Link from 'next/link'

import SectionTitle from './SectionTitle';

export default function WorkSection({ className }) {
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
          <div className="row" key={d.title}>
            <div className="col">
              <div className={classes.project}>
                <div className={classnames('row', i % 2 && 'flex-row-reverse')}>
                  <div className="col-12 col-xl-6">
                    <div className={classes.projectThumbnail} style={{
                      backgroundImage: `url(${d.thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'blur(0.8)',
                    }}>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className={classnames('row', 'align-items-center', classes.projectDescriptionRow)}>
                      <div className="col">
                        <div className={classes.projectDescription}>
                          <Typography className={classes.projectTitle} variant="h6">{d.title}</Typography>
                          <Typography className={classes.projectLead} variant="body1">{d.lead}</Typography>
                          <Link href={{ pathname: `/projects/${d.id}`}}>
                            <Button 
                              variant="outlined" 
                              color="secondary"
                            >
                              MORE
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  projectThumbnail: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 500,
    maxHeight: 310,
    height: 310,
    position: 'relative',
    marginBottom: theme.spacing(3),
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: -10,
      right: -10,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundColor: theme.palette.secondary.main
    },
  },
  projectDescriptionRow: {
    height: '100%',
  },
  projectDescription: {

  },
  projectTitle: {
    
    // fontWeight: 'bold',
  },
  projectLead: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1)
  }
}));

const projects = [
  {
    id: 'bible-reading-plans',
    title: 'Read Through the Bible',
    lead: 'Discover, use, and create Bible reading plans',
    thumbnail: '/projects/bible-reading-plans/thumbnail.png',
  },
  {
    id: 'apartment-reporter',
    title: 'Apartment Reporter',
    lead: 'Scraping the web for the apartment next door',
    thumbnail: '/projects/apartment-reporter/thumbnail.png',
  },
  {
    id: 'data-viz',
    title: 'Bl.ocks & ObservableHQ',
    lead: 'Data visualization experiments and proof of concepts',
    thumbnail: '/projects/data-viz/thumbnail.png',
  },
  {
    id: 'perse',
    title: 'PerSE',
    lead: 'Geovisual analytics for multi-calendar environments',
    thumbnail: '/projects/perse/thumbnail.png',
  },
  {
    id: 'spotvis',
    title: 'SPoTvis',
    lead: 'Exploring sentiment surrounding 2013 U.S. Government shutdown.',
    thumbnail: '/projects/spotvis/thumbnail.png',
  },
];
