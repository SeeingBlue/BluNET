import React, { Component } from "react";
import Cta from '../components/SupportToday';
import Header from '../components/Header';
import Boxrow from '../components/boxes/Boxrow';
import Bigheader from '../components/BigSectionTitle';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
    render() {
        const topbox = [{
            section: '4u 12u(narrower)',
            div: 'box highlight',
            icon: <FontAwesomeIcon icon={['fab', 'twitch']} />,
            left: false,
            boxurltext: 'Twitch',
            boxurl: 'https://twitch.tv/seeingblue',
            boxtext: 'Unfortunately, I no longer have the time to offer any broadcasting. Visit our Discord community for latest updates.'
        },
        {
            section: '4u 12u(narrower)',
            div: 'box highlight',
            icon: <FontAwesomeIcon icon={['fas', 'desktop']} />,
            left: false,
            boxurltext: 'Ultimate Twitch Bot',
            boxurl: '/utb',
            boxtext: 'The ultimate AIO Twitch loyality bot. The only tool a streamer should ever need. Moderate your chat, update your channel, reward your viewers, and more!'
        },
        {
            section: '4u 12u(narrower)',
            div: 'box highlight',
            icon: <FontAwesomeIcon icon={['fas', 'pencil-alt']} />,
            left: false,
            boxurltext: 'Blog',
            boxurl: 'https://seeingblue.us/blog',
            boxtext: "Check our BluNET's latest blog post featuring game reviews, tech news, personal rants, and development updates."
        }]

        const bottombox1 = [{
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'users']} />,
            left: true,
            boxurltext: 'Tiered Viewergroups',
            boxurl: '',
            boxtext: 'Rank your viewers and set command permissions with customizable viewergroups by currency, time, follower status, and more.'
        },
        {
            section: '6u 12u(narrower)',
            div: 'box post',
            icon: <FontAwesomeIcon icon={['fas', 'music']} />,
            left: true,
            boxurltext: 'Song Request',
            boxurl: '',
            boxtext: "Allow your viewers to earn the right to request songs during your broadcast. You're in control of who can request."
        }
        ]

        const bottombox2 = [
            {
                section: '6u 12u(narrower)',
                div: 'box post',
                icon: <FontAwesomeIcon icon={['fas', 'comments']} />,
                left: true,
                boxurltext: 'CSV Importing',
                boxurl: '',
                boxtext: "We support importing Revlo and other bot's csv upon request through Discord."
            },
            {
                section: '6u 12u(narrower)',
                div: 'box post',
                icon: <FontAwesomeIcon icon={['fas', 'question']} />,
                left: true,
                boxurltext: 'Fast and Friendly Support',
                boxurl: '',
                boxtext: 'With multiple ways to get help like tutorial videos, manuals, support forums, and internal help chat with hundreds of others.'
            }
        ]


        return (
            <React.Fragment>
                <Header activekey='/' />
                <Cta h2="Show your support today!" url="https://www.paypal.me/seeingblue" text="Support" />
                <section className="wrapper style1">
                    <div className="container">
                        <div className="row 200%">
                            <Boxrow boxarray={topbox} />
                        </div>
                    </div>
                </section>
                <Bigheader h2text="Why Ultimate Twitch Bot?" text="Besides being free here are a few other amazing features." />
                <section className="wrapper style1">
                    <div className="container">
                        <div className="row">
                            <Boxrow boxarray={bottombox1} />
                        </div>
                        <div className="row">
                            <Boxrow boxarray={bottombox2} />
                        </div>
                    </div>
                </section>
                <Cta h2="Show your support today!" url="https://www.paypal.me/seeingblue" text="Support" />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Home;
