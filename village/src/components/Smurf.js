import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <p>ID: {props.id}</p>
      <h3>Name: {props.name}</h3>
      <strong>Alias: {props.alias}</strong>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
