import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

interface Props {
  items: any[];
  onCloseRequest: () => void;
}

export default ({ items, onCloseRequest }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Lightbox
      mainSrc={items[imageIndex].src}
      nextSrc={items[(imageIndex + 1) % items.length].src}
      prevSrc={items[(imageIndex + items.length - 1) % items.length].src}
      onCloseRequest={() => onCloseRequest()}
      onMovePrevRequest={() => setImageIndex((imageIndex + items.length - 1) % items.length)}
      onMoveNextRequest={() => setImageIndex((imageIndex + 1) % items.length)}
    />
  );
};