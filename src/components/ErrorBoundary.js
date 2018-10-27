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
		return(

		);
	}
}

export default ErrorBoundary;
