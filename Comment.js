import React from "react";
//Comment component. 
/*
  I used faker js library for my props to generate random data.
            avatar = {faker.image.avatar()} 
            author={faker.internet.email()} 
            date={faker.date.month()} 
            text={faker.company.catchPhrase()}
*/
const Comment = (props)=> {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> {props.date} </span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};
export default Comment;