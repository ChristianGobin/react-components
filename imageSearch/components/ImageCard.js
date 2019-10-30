import React from 'react';

//the purpose of this component is to determine the height of the image being rendered and allocate the correct amount of space 
//for the image to not overlap the next image, using the Ref system in react.
class ImageCard extends React.Component{
    const {description, urls} = this.props.image;
    render(){
        return(
            <div>
              <img src={urls.regular} alt={description}/>
            </div>
        )
    }
}

export default ImageCard;
