import React from 'react';

//the purpose of this component is to determine the height of the image being rendered and allocate the correct amount of space 
//for the image to not overlap the next image, using the Ref system in react.
class ImageCard extends React.Component{
    constructor(props){
        this.state = {spans: 0};
        super(props);
        const imageRef = React.createRef();
    }
    componentDidMount(){
        //on load event, run the setSpans callback function
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    
    //this function takes the height of the image and determines the amount of space to allocate the image.
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans : spans});
    }
    
    
    render(){
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
              <img src={urls.regular} alt={description} ref={this.imageRef}/>
            </div>
        )
    }
}

export default ImageCard;
