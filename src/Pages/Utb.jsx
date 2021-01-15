import React, { Component } from "react";
import axios from "axios";
import Cta from '../components/SupportToday';
import Header from '../components/Header';
import Boxrow from '../components/Boxrow';
import Bigheader2 from '../components/Headline';
import Bigheader from '../components/BigSectionTitle';
import Footer from '../components/Footer';
import Gallery from '../components/gallery/Gallery';
import Download from '../components/Download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Utb extends Component {

    state = {
        boxes: [],
    };
    componentDidMount() {
        axios.get("/ui/utb").then((response) => {
            this.setState({ boxes: response.data});
        })
    }

    render() {
        const { box } = this.state;
        return (
            <React.Fragment>
                <Header activekey='/utb' />
                <Cta h2="Show your support today!" url="https://www.paypal.me/seeingblue" text="Support" />
                <Bigheader2 h1text="Ultimate Twitch Bot is a completely free loyalty bot designed to allow streamers the ability to give back to their viewers in return for watching their channel. It has many features for viewers to spend their loyalty on and keep them coming back for more." />
                <Bigheader h2text="Features" text="Basically everything. Well... eventually." />

                <section className="wrapper style1">
                    <div className="container">
                        <div className="row">
                            <Boxrow boxarray={box}/>
                        </div>
                        <div className="row">
                            <Boxrow boxarray={box.bottombox2}/>
                        </div>
                        <div className="row">
                            <Boxrow boxarray={box.bottombox3}/>
                        </div>
                        <div className="row">
                            <Boxrow boxarray={box.bottombox4}/>
                        </div>
                        <div className="row">
                            <Boxrow boxarray={box.bottombox5}/>
                        </div>
                    </div>
                </section>

                <Bigheader h2text="Gallery" text="Have a look at a few screenshots." />
                <Gallery />
                <Bigheader h2text="Download" text="Get the latest software right here only." />

                <section className="wrapper style1">
                    <div className="container" align="center">
                    <Download />
                    </div>
                </section>

                <Cta h2="Show your support today!" url="https://www.paypal.me/seeingblue" text="Support" />
                <Footer />
            </React.Fragment>
        );
    }
}
export default Utb;
