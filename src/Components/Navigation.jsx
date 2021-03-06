import React from '../../node_modules/react';
import { Link } from '../../node_modules/react-router-dom';

/**
 * Reusable navigation component
 * Changed original so that it takes in path and title from props, for reusability
 */
const Navigation = props => (
  <ul>
    <li>
      <Link to={props.path}>{props.title}</Link>
    </li>
  </ul>
);

export default Navigation;
