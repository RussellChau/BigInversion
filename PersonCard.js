import React from 'react';

const PersonCard = props => {
    return (
        <div>
            <h1> {this.props.lastName}, {this.props.firstName} </h1>
            <p> Age: {this.state.currentAge} </p>
            <p>Hair Color: {this.props.hairColor}</p>
        </div>
    );
}

export default PersonCard;
