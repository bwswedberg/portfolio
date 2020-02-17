import React, { useState } from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme, Button} from "@material-ui/core";
import classnames from 'classnames';

import SectionTitle from '../SectionTitle';
import ProjectLightbox from './ProjectLightbox';
import Project from './Project';
import projects from './projects';

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
