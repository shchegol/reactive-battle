import React, { Component, ErrorInfo } from 'react';
import { Redirect } from 'react-router-dom';
import { Props, State } from './types';

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  // todo eslint выдаёт ошибку:
  // todo error  '_' is defined but never used  @typescript-eslint/no-unused-vars
  // static getDerivedStateFromError(_: Error): State {
  //   return { hasError: true };
  // }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Redirect to="/error-5xx" />;
    }

    return children;
  }
}
