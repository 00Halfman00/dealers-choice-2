import React from 'react';
import { connect } from 'react-redux';

const Fellows = ({ fellows }) => {
  console.log('in Fellows component', fellows);
  return (
    <div>
      <ul>
        {fellows.map((fellow) => {
          return (<li key={fellow.id}>{fellow.name}</li>)
        })}
      </ul>
    </div>
  );
};

export default connect(({ fellows }) => {
  console.log(fellows);
  return {
    fellows,
  };
})(Fellows);


