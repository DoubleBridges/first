import React, { PureComponent } from 'react';
import './Landing.css';

class Landing extends PureComponent {
  constructor(props) {
    super()
  }
  render() {
    return (
      <section className="landing-container">
        <header className="landing-content">
          <h1>Hi, this is my first attempt at React</h1>
          <p>A responsive app that's way too simple for react, 
            <br></br>but I've got to start somewhere in order to learn</p>
          <button className="trans-btn">GET STARTED<i></i></button>
        </header>
      </section>
    )
  }
}

export default Landing