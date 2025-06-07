import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((img) => (
        <div key={img.id}>
          <img alt={img.alt_description} src={img.urls.small}></img>
          <h3>Description: {img.alt_description}</h3>
          <h3>By: {img.user.username}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
