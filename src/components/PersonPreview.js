import React from 'react';

export default class PersonPreview extends React.Component {
  render() {
    return (
      <div className="person-preview">
        <h2 className="name">{this.props.name}</h2>
        <span className="attendance">{this.props.attendance}</span>
      </div>
    );
  }
}
