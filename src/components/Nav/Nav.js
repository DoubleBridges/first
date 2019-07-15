import React, { PureComponent } from 'react';
import './Nav.css';

class Nav extends PureComponent {
  constructor(props) {
    super()
  }
  render() {
    return (
      <nav className="nav-container">
        <section className='section-header'>
          <h3 className="nav-header"> R E A C T </h3>
        </section>
        <p className="nav-tagline">BY ME, KIND OF</p>
        <p className='menu-title'>MENU</p>
        <i></i>
      </nav>
    )
  }
}

export default Nav;