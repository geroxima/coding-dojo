import React from 'react';
import './PersonCard.css';
import BirthdayButton from './BirthdayButton';

class PersonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age
    };
  }

  incrementAge = () => {
    this.setState(prevState => ({
      age: prevState.age + 1
    }));
  }

  render() {
    const { firstName, lastName, hairColor } = this.props;
    const { age } = this.state;

    return (
      <div className="person-card">
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <BirthdayButton incrementAge={this.incrementAge} firstName={firstName} lastName={lastName} />
      </div>
    );
  }
}

export default PersonCard;
