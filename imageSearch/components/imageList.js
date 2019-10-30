import React from "react";
import ImageCard from "./ImageCard";
const ImageList = props => {
  //create an array called Images using the .map() function on the prop images. 
  //render individual image cards for each image being mapped. 
  const Images = props.images.map((image) => {
    return (
      //Pass Each Image as a prop to the ImageCard for processing and eventual render.
      <ImageCard key={image.id} image={image}/>
    );
  });
  return <div className="ui grid">{Images}</div>;
};

export default ImageList;
