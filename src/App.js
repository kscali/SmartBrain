import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

import "./App.css";

// import Clarifai from "clarifai";
const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "523a1aaadc574e339a14e1adedfbee05"
});

const particleOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false
      }
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      direction: "bottom",
      out_mode: "out"
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove"
      }
    },
    modes: {
      remove: {
        particles_nb: 10
      }
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  onSubmit = () => {
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function(response) {
          // do something with response
          console.log(response);
          console.log("click");
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
