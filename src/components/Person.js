import React from 'react';

export default class Person extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const attending = data[this.props.code].attendance;
    return (
      <span className="person">
        {name} is {attending}
      </span>
    );
  }
}
