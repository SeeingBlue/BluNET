import React, { Component } from "react";
import Socialicons from './SocialIcons';
import Copyright from './Copyright';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Socialicons />
                <Copyright />
            </div>

        );
    }
}
export default Footer;
