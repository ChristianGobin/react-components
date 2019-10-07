import React from "react";

function Season(props) {
  let month = new Date();
  let currentMonth = month.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function getHemisphere() {
    //eslint-disable-next-line
    let hemi = null;
    if (0 < props.yourLat < 90) {
      return (hemi = "Northern");
    } else if (props.yourLat < 0) {
      return (hemi = "Southern");
    } else {
      return (hemi = null);
    }
  }
  //Determination of the month and latitude handled. Appropriate card displayed
  if (
    getHemisphere() === "Northern" &&
    (currentMonth >= 4 && currentMonth <= 8)
  ) {
    return (
      <div className="ui card" id="Summer">
        <div className="content">
          <div className="header"></div>
          <div className="meta">2 days ago</div>
          <div className="description">
            <h3>This is your Latitude {props.yourLat}</h3> <br />
            <p>
              <strong>Month: </strong> {months[currentMonth]}
              <br />
              The Season is Summer.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui card" id="Winter">
        <div className="content">
          <div className="header">
            <h3>The Season is Winter.</h3>
          </div>
          <div className="description">
            <p>
              <strong>Month: </strong> {months[currentMonth]}
              <br />
              <strong>Latitude: </strong> {props.yourLat}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Season;
