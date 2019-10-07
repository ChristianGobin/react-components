import React from "react";
import Season from "./season";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0
    };
  }

  render() {
    //Get user geolocation
    navigator.geolocation.getCurrentPosition(
      //Set state of position as latitude of user
      position => this.setState({ position: position.coords.latitude }),
      err => console.log(err)
    );
    return (
      //Pass prop position into Season Component.
      <Season yourLat={this.state.position}></Season>
    );
  }
}
export default App;
