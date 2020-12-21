import React, { Component } from "react";

class Download extends Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col"><h3>Ultimate Twitch Bot 3</h3>&nbsp;</th>
                        </tr>
                        <tr>
                            <td><h1>Download: </h1></td>
                            <td><a id="InstallButton" href="../utb3/setup.exe">Install</a> *</td>
                        </tr>
                        <tr>
                            <td><h1>Version: </h1></td>
                            <td><p>3.13.0</p></td>
                        </tr>
                        <tr>
                            <td><h1>Last Updated: </h1></td>
                            <td><p>10/15/19</p></td>
                        </tr>
                    </tbody>
                </table>
                <p align='right'>* Please visit our Blog or Discord for support</p>

            </React.Fragment>
        );
    }
}
export default Download;
