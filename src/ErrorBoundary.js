import React, { Component } from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was am error with listing. <Link to="/">Click here</Link> to go
          back to the home page or wait for five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
