import React from 'react';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import fetch from 'isomorphic-unfetch';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import Error from 'next/error'
import Head from 'next/head';

import Header from '../../Header';


interface Props {
  errorCode?: number | boolean,
  content: string;
  data: any
}

function ProjectPage({ data, content }: Props) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Brian Swedberg - {data.title}</title>
      </Head>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Typography className={classes.title} variant="h3" component="h1">
              {data.title}
            </Typography>
            <div className={classes.markdownContent}>
              <ReactMarkdown 
                source={content} 
                renderers={markdownRenderers}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  markdownContent: {
    '& a': {
      textDecorationColor: theme.palette.secondary.light,
      color: theme.palette.secondary.light,
    }
  },
}));

ProjectPage.getInitialProps = async ({ query }): Promise<Props> => {
  const { projectId } = query;
  const res = await fetch(`${process.env.API_URL}/projects/${projectId}/${projectId}.md`);
  const rawMarkdown = await res.text();
  const { data, content } = matter(rawMarkdown);
  return {
    errorCode: res.ok ? res.status : false,
    content,
    data,
  };
}

const markdownRenderers = {
  paragraph: (props) => <Typography variant="body1" gutterBottom {...props}/>,
  h2: (props) => <Typography variant="subtitle1" {...props}/>,
  h3: (props) => <Typography variant="subtitle2" {...props}/>,
  link: (props) => <Typography variant="body2" component="a" {...props}/>,
};

export default ProjectPage;
