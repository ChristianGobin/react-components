import React from "react";
class SearchBar extends React.Component {
  state = { userInput: "" };

  render() {
    return (
      <div className="ui fluid category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search for Stock Images"
            onChange={event => {
              this.setState({ userInput: event.target.value });
            }}
            value={this.state.userInput}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}
export default SearchBar;
