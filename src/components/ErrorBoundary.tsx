import React from 'react'
import { PrivyIdContext } from './PrivyIdProvider';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static contextType = PrivyIdContext;
  declare context: React.ContextType<typeof PrivyIdContext>

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      const { setPrivyId } = this.context;
      return (
        <div className="page">
          <h1>Something went wrong.</h1>
          <p>Did you enter correct Privy App ID?</p>
          <button className="default" onClick={() => setPrivyId('')}>Try again</button>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;