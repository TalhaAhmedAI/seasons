import React from "react";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }
  render() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }

    if (!this.state.error && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  }
}

export default App;
