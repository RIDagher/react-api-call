import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="container mt-4 d-flex flex-wrap gap-4 justify-content-center">
      {images.map((img) => (
        <div key={img.id} className="card shadow-sm" style={{ width: "18rem" }}>
          <img
            alt={img.alt_description}
            src={img.urls.small}
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text text-muted">
              <strong>By:</strong> {img.user.username}
            </p>
            <h5 className="card-title">
              {img.alt_description || "No description"}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
