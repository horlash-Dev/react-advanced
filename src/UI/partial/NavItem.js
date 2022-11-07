import React from "react";

const NavItem = (props) => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <a
          href="#a"
          className={`nav-link rounded-5 ${
            props.id === props.navActive ? "active shadow" : ""
          }`}
          id={props.id}
          onClick={props.onClick}
        >
          {props.name}
        </a>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
