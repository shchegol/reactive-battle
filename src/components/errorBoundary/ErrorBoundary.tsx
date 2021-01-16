import React, { Component, ErrorInfo } from 'react';
import Error404 from '@root/pages/error404';
import { Props, State } from './types';

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.logError(error, info);
  }

  logError = (error: Error, info: ErrorInfo) => {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
  };

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <Error404 />;
    }

    return children;
  }
}
