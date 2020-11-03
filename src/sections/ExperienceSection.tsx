import React from 'react';
import { makeStyles, createStyles } from "@material-ui/styles";
import { Typography, Theme} from "@material-ui/core";
import classnames from 'classnames';
import SectionTitle from './SectionTitle';

export default function ExperienceSection({ className }) {
  const classes = useStyles();
  return (
    <section className={classnames(classes.root, className)}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes.titleContainer}>
              <SectionTitle title="9 to 5" />
            </div>
            { jobs.map(job => (
              <div className={classes.job} key={job.position}>
                <Typography 
                  className={classes.jobHeader} 
                  variant="h6" 
                  gutterBottom
                >
                  {job.position}&nbsp;
                  <Typography 
                    className={classes.jobDate} 
                    variant="body2" 
                    component="span"
                  >
                    {job.dateRange}
                  </Typography>
                </Typography>
                <Typography 
                  className={classes.jobDescription}
                  variant="body2" 
                  gutterBottom
                >
                  <span className={classes.jobCompany}>{job.company}</span> — {job.description} 
                </Typography>
                <Typography 
                  className={classes.jobFooter}
                  variant="caption"  
                  paragraph
                  gutterBottom
                >
                  {job.tech}
                </Typography>
              </div>
            ))}
          </div>
        </div>
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
  job: {
    marginBottom: theme.spacing(8),
    maxWidth: 400
  },
  jobHeader: {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  jobDate: {
    display: 'inline',
    whiteSpace: 'nowrap',
    color: theme.palette.text.secondary,
  },
  jobDescription: {
    marginBottom: theme.spacing(1),
  },
  jobCompany: {
    // fontWeight: 300,
    letterSpacing: '0.03em',
  },
  jobFooter: {
    // borderLeft: `2px solid rgba(255,255,255,0.3)`,
    // paddingLeft: '1rem',
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const jobs = [
  { 
    position: 'Fullstack Developer',
    dateRange: '2017.08 - NOW', 
    company: 'BOOZ ALLEN',
    description: 'I develop enterprise web apps and tools. I also work with clients to develop interactive stories and visualizations that explain complex topics to a broad audience.',
    tech: 'TypeScript, JavaScript, HTML, CSS, SASS, Angular, D3, Leaflet, Highcharts, Redux, Apollo/GraphQL, Express, REST, Node, PostgreSQL, MongoDB, Git'
  },
  { 
    position: 'Fullstack Developer',
    dateRange: '2015.06 - 2017.08', 
    company: 'OGSYSTEMS',
    description: 'I developed features for an enterprise level facilities management web app, and secondary situational awareness web app.',
    tech: 'JavaScript, HTML, CSS, React, Redux, Leaflet, jQuery, Java, Oracle, Git'
  }
];
