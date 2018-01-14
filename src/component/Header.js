import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  render() {
    return (
      <div className={this.state.openMenu ? "open" : ""}>
        <div className="header">
          <div className="header_content">
            <img className="header_headshot" src={this.props.headshot} alt="headshot" />
            <div className="header_bio">
              <h2>{this.props.name}</h2>
              <hr />
              <p>{this.props.bio}</p>
            </div>
            <div className={this.props.email ? "header_contact" : "hidden"}>
              <h2>Contact</h2>
              <hr />
              <a href={"mailto:" + this.props.email}>{this.props.email}</a>
            </div>
          </div>
        </div>
        <button
          className={this.state.openMenu ? "header_menu-button open" : "header_menu-button"}
          onClick={this.handleClick}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Header;