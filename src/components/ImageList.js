import React from 'react';

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;

// added key to get rid of error. Taken from the api keys that come with the
// image object. Only have to do this for Lists
// Add key to root element. If the image was wrapped in a div,
// add the key property to the div instead of the img tag

// Destructured the image that was passed in into the pieces we are
// going to be using (description, id, urls)
