import React, { Component } from "react";
import Socialicons from './SocialIcons';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>
          <a href="index.html" id="logo">
            BluNET <em>- Home of Ultimate Twitch Bot</em>
          </a>
        </h1>
        <Socialicons />
        <Menu activekey={this.props.activekey}/>
      </div>
    );
  }
}
export default Header;
