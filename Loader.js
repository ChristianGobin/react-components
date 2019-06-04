import React from "react";
//Loading screen component 

const Loader = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading..."
};
export default Loader;
