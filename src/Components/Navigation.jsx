import React from '../../node_modules/react';
import { Link } from '../../node_modules/react-router-dom';

const Navigation = props => (
  <ul>
    <li>
      <Link to={props.path}>{props.title}</Link>
    </li>
  </ul>
);

export default Navigation;
