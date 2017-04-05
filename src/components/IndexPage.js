import React from 'react';
import PersonPreview from './PersonPreview';
import people from '../data/people'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="person-selector">
          {people.map(personData => <PersonPreview key={personData.id} {...personData} />)}
        </div>
      </div>
    );
  }
}
