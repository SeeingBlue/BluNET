import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Socialicons extends Component {
    render() {
        return (
            <ul className="icons">
                <li>
                    <a href="https://twitter.com/sBlueS2" className="icon"
                    ><FontAwesomeIcon icon={['fab', 'twitter']}/><span className="label">Twitter</span></a
                    >
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/seeingblues2"
                        className="icon"
                    ><FontAwesomeIcon icon={['fab', 'facebook']}/><span className="label">Facebook</span></a
                    >
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/user/SeeingBlue"
                        className="icon"
                    ><FontAwesomeIcon icon={['fab', 'youtube']}/><span className="label">Youtube</span></a
                    >
                </li>
                <li>
                    <a href="https://www.twitch.tv/SeeingBlue" className="icon"
                    ><FontAwesomeIcon icon={['fab', 'twitch']}/><span className="label">Twitch</span></a
                    >
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/SeeingBlueS2"
                        className="icon"
                    ><FontAwesomeIcon icon={['fab', 'instagram']}/><span className="label">Instagram</span></a
                    >
                </li>
                <li>
                    <a
                        href="http://steamcommunity.com/groups/blunet"
                        className="icon"
                    ><FontAwesomeIcon icon={['fab', 'steam']}/><span className="label">Steam</span></a
                    >
                </li>
                <li>
                    <a href="https://paypal.me/seeingblue" className="icon"
                    ><FontAwesomeIcon icon={['fab', 'paypal']}/><span className="label">Paypal</span></a
                    >
                </li>
            </ul>

        );
    }
}
export default Socialicons;
