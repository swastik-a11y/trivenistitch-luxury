import React from "react";

type State = { hasError: boolean; error?: unknown };

export default class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Optional: send to error reporting service
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, fontFamily: "Inter, system-ui, -apple-system" }}>
          <h2 style={{ marginTop: 0 }}>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap", color: "#8a0000" }}>
            {String(this.state.error)}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
