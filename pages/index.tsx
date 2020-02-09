import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme} from "@material-ui/core";
import classnames from 'classnames';

import IntroSection from '../src/IntroSection';
import ProjectsSection from '../src/ProjectsSection';
import ExperienceSection from '../src/ExperienceSection';
import ContactSection from '../src/ContactSection';

export default function Index({ userAgent, theme }) {
  const classes = useStyles();
  return (
    <div>
      <IntroSection className={classes.section} />
      <ProjectsSection className={classes.section} />
      <ExperienceSection className={classes.section} />
      <ContactSection className={classes.section} />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  section: {
    marginBottom: theme.spacing(6)
  },
}));
