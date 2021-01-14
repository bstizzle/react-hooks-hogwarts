import React, {useState} from "react";
import piggy from "../assets/porco.png";

const Nav = ({onHandleFilter, onSortClick, clicked}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br></br>
      <button onClick={onHandleFilter}>{clicked ? "all hogs" : "greased hogs"}</button>
      <button onClick={onSortClick} value='name'>Name</button>
      <button onClick={onSortClick} value='weight'>Weight</button>
    </div>
  );
};

export default Nav;
