import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const Item = ({ onSelected, webformatURL, largeImageURL, tags }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => onSelected({ largeImageURL, tags })}
      />
    </GalleryItem>
  );
};

Item.propTypes = {
  onSelected: PropTypes.func,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
