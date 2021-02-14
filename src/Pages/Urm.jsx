import React, { Component } from "react";
import Cta from '../components/SupportToday';
import Header from '../components/Header';
import Boxrow from '../components/boxes/Boxrow';
import Bigheader2 from '../components/Headline';
import Bigheader from '../components/BigSectionTitle';
import Footer from '../components/Footer';
import Gallery from '../components//gallery/Gallery';
import Download from '../components/Download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Utb extends Component {
    render() {
        const bottombox1 = [{
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'money-bill-alt']} />,
            left: true,
            boxurltext: 'Loyalty System',
            boxurl: '',
            boxtext: 'Reward your viewers with a customizable currency they can spend on various other bot features. You control the rate, name, and intervals. You control everything!'
        },
        {
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'users']} />,
            left: true,
            boxurltext: 'Tiered Viewergroups',
            boxurl: '',
            boxtext: "Rank your viewers and set command permissions with customizable viewergroups by currency, time, follower status, and more."
        }
        ]

        const bottombox2 = [{
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'terminal']} />,
            left: true,
            boxurltext: 'Custom Commands',
            boxurl: '',
            boxtext: "Create your own keywords with custom responses and cooldowns. Then give viewergroups permission to use them. Nested Commands and random responses now supported!"
        },
        {
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'gift']} />,
            left: true,
            boxurltext: 'Drawing/Giveaway System',
            boxurl: '',
            boxtext: "Randomally giveaway cool stuff to your viewers or charge them currency to enter a drawing. All this and more is possible."
        }
        ]

        const bottombox3 = [{
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'gamepad']} />,
            left: true,
            boxurltext: 'Gambling & Betting Games',
            boxurl: '',
            boxtext: '100% customizable bankhack style gambling and betting game. Viewers can put their currency on the line for a chance to win more or lose it all.'
        },
        {
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'balance-scale']} />,
            left: true,
            boxurltext: 'Voting',
            boxurl: '',
            boxtext: "Viewers can spend currency to place a vote on an important topic. The winner is determined by the option with the most votes."
        }
        ]

        const bottombox4 = [{
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'question']} />,
            left: true,
            boxurltext: 'Trivia Game',
            boxurl: '',
            boxtext: 'Create multiple categories each with their own set of unique questions that viewers can spend their currency trying to answer.'
        },
        {
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'wrench']} />,
            left: true,
            boxurltext: 'Channel Title & Game',
            boxurl: '',
            boxtext: "Change your streams title or game right inside the bot! No more loading Twitch or running more software everytime you want to update this information."
        }
        ]

        const bottombox5 = [{
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'music']} />,
            left: true,
            boxurltext: 'Song Request',
            boxurl: '',
            boxtext: "Allow your viewers to earn the right to request songs during your broadcast. You're in control of who can request."
        },
        {
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'comments']} />,
            left: true,
            boxurltext: 'Revlo CSV Support',
            boxurl: '',
            boxtext: "You can import your old Revlo csv file so all your viewers get their old points back!"
        }
        ]

        return (
            <React.Fragment>
                <div id="page-wrapper">
                    <Header activekey='/utb' />
                    <Cta h2="Show your support today!" url="https://www.paypal.me/seeingblue" text="Support" />

                    <Cta h2="Show your support today!" url="https://www.paypal.me/seeingblue" text="Support" />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}
export default Utb;
