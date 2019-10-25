import React from "react";

const ImageList = props => {
  const imageRender = props.images.map(image => {
    return (
      <div className="four wide column">
        <img src={image.urls.regular} />
      </div>
    );
  });
  return <div className="ui grid">{imageRender}</div>;
};

export default ImageList;
