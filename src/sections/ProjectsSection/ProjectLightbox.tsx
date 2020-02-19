import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import ReactMarkdown from 'react-markdown';

import { Project } from './projects';

interface Props {
  project: Project;
  onCloseRequest: () => void;
}

export default ({ project, onCloseRequest }: Props) => {
  const { images } = project;
  const [imageIndex, setImageIndex] = useState(0);
  const image = images[imageIndex];
  return (
    <Lightbox
      mainSrc={image.src}
      nextSrc={images[(imageIndex + 1) % images.length].src}
      prevSrc={images[(imageIndex + images.length - 1) % images.length].src}
      onCloseRequest={() => onCloseRequest()}
      onMovePrevRequest={() => setImageIndex((imageIndex + images.length - 1) % images.length)}
      onMoveNextRequest={() => setImageIndex((imageIndex + 1) % images.length)}
      imageTitle={`${project.title}: ${image.title}`}
      imageCaption={<ReactMarkdown source={image.caption} />}
    />
  );
};