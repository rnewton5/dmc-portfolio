import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
        <div className="footer">
          <div className="footer_content">
            <img className="footer_headshot" src={this.props.headshot} alt="headshot" />
            <div className="footer_bio">
              <h2>{this.props.name}</h2>
              <hr />
              <p>{this.props.bio}</p>
            </div>
            <div className="footer_contact">
              <p>Contact</p>
              <hr />
              <a href={"mailto:" + this.props.email}>{this.props.email}</a>
            </div>
          </div>
        </div>
        <button
          className={this.state.openMenu ? "footer_menu-button open" : "footer_menu-button"}
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

export default Footer;