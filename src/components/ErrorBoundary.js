import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false, errorInfo: null}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true, errorInfo: info})
	}
	render() {
		if(this.state.hasError) {
			return <h1>Something went wrong. Please try again.</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
