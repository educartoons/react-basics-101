import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ['https://placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleIndexClick = e => {
    this.setState({
      ...this.state,
      active: +e.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={index}
              src={photo}
              alt="animal thumbnail"
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
