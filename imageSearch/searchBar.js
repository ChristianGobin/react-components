import React from "react";
class SearchBar extends React.Component {
  state = { uData: "" };
  //Arrow Function bypasses the need for a ctor bind.
  onFormSubmit = event => {
    event.preventDefault();
    //call function that was passes as prop to this child component.
    this.props.apiCall(this.state.uData);
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="Search for Stock Images"
            value={this.state.uData}
            onChange={event => {
              this.setState({ uData: event.target.value });
            }}
          />
        </div>
      </form>
    );
  }
}
export default SearchBar;
