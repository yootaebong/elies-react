import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  render() {
    const { allCount } = this.props;
    return (
      <nav className="navbar">
        <h2>Habit Trachker</h2>
        <span className="navbar-count">{allCount}</span>
      </nav>
    );
  }
}

export default Nav;
