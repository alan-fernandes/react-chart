import React from 'react';
import { Link } from 'react-router-dom';

import IosLeaf from 'react-ionicons/lib/IosLeaf';
import MdIonic from 'react-ionicons/lib/MdIonic';
import './Navbar.css';

export default (props) => {
  console.log(props)
  return (
    <div className="navbar">
      <span className="logo">Semantix</span>

      <ul className="item-menu">
        <li className={props.active === "page1" ? 'active' : ''}>
          <Link to="/">
            <MdIonic fontSize="35px" color="#FFF" />
            <span>Page 1</span></Link>
        </li>
        <li className={props.active === "page2" ? 'active' : ''}>
          <Link to="/page2" >
            <IosLeaf fontSize="35px" color="#FFF" />
            <span>Page 2</span>
          </Link>

        </li>
      </ul>
    </div>
  );
}