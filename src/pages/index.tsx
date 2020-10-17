import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme} from "@material-ui/core";

import IntroSection from '../sections/IntroSection';
import ProjectsSection from '../sections/ProjectsSection/ProjectsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ContactSection from '../sections/ContactSection';


export default function Index({ userAgent, theme }) {
  const classes = useStyles();
  return (
    <div>
      <IntroSection className={classes.section} />
      <div className={classes.projectsSectionContainer}>
        <ProjectsSection className={classes.section} />
      </div>
      <div className={classes.experienceSectionContainer}>
        <ExperienceSection className={classes.section} />
      </div>
      <ContactSection className={classes.section} />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  section: {
    marginBottom: theme.spacing(6)
  },
  projectsSectionContainer: {
    marginBottom: theme.spacing(12),
  },
  experienceSectionContainer: {
    marginBottom: theme.spacing(12),
  },
}));
