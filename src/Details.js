import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

class Details extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
    throw Error('error');
  }
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else {
      const { animal, name, breed, location, description, media } = this.state;
      return (
        <div className="details">
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt me!</button>
          <p>{description}</p>
        </div>
      );
    }
  }
}

const DetailsWithErrorBoundary = props => {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
};

export default DetailsWithErrorBoundary;
