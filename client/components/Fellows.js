import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Fellows = ({ fellows, match }) => {
  //console.log('in Fellows component', fellows);
  return (
    <div>
      <ul>
        {fellows.map((fellow) => {
          return (
            <li
              key={fellow.id}
              className={fellow.id === match.params.id ? 'selected' : ''}
            >
              <Link to={`/fellows/${fellow.id}`}>{fellow.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(({ fellows }) => {
  //console.log(fellows);
  return {
    fellows,
  };
})(Fellows);
