import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>DnD 5e Character Creater</h1>
        <Link>Point Buy</Link> | <Link>Standard Array</Link> |{" "}
        <Link>Random</Link>
      </header>
    );
  }
}

export default Header;
