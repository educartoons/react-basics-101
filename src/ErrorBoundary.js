import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false
  };
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }
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
