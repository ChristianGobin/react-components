import React from "react";

const ImageList = props => {
  //create an array called Images using the .map() function on the prop images. 
  //render images with a key and alt using properties of each image.
  //destructure properties of image we use to avoid repeating 'image.something'
  const Images = props.images.map(({urls, description, id}) => {
    return (
      <img src={urls.regular} alt={description} key={id/>
    );
  });
  return <div className="ui grid">{imageRender}</div>;
};

export default ImageList;
