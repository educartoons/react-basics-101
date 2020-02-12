import React, { Component } from 'react';
import { navigate } from '@reach/router';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

import Modal from './Modal';

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  };
  componentDidMount() {
    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    });
  }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  adopt = () => {
    navigate(this.state.url);
  };
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else {
      const {
        animal,
        name,
        breed,
        location,
        description,
        media,
        showModal
      } = this.state;
      return (
        <div className="details">
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {theme => (
              <button
                style={{ backgroundColor: theme[0] }}
                onClick={this.toggleModal}
              >
                Adopt me!
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal && (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </div>
            </Modal>
          )}
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
