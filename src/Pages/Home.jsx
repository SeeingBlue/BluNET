import React, { Component } from "react";
import axios from "axios";
import Cta from "../components/SupportToday";
import Header from "../components/Header";
import Boxrow from "../components/Boxrow";
import Bigheader from "../components/BigSectionTitle";
import Footer from "../components/Footer";

class Home extends Component {

  state = {
    boxes: [],
  };

  componentDidMount() {
    axios.get("/ui/utb").then((response) => {
      this.setState({ boxes: response.data });
    });
  }

  render() {
    const { box } = this.state;
    return (
      <React.Fragment>
        <Header activekey="/" />
        <Cta
          h2="Show your support today!"
          url="https://www.paypal.me/seeingblue"
          text="Support"
        />
        <section className="wrapper style1">
          <div className="container">
            <div className="row 200%">
              <Boxrow boxarray={box.topbox} />
            </div>
          </div>
        </section>
        <Bigheader
          h2text="Why Ultimate Twitch Bot?"
          text="Besides being free here are a few other amazing features."
        />
        <section className="wrapper style1">
          <div className="container">
            <div className="row">
              <Boxrow boxarray={box.bottombox1} />
            </div>
            <div className="row">
              <Boxrow boxarray={box.bottombox2} />
            </div>
          </div>
        </section>
        <Cta
          h2="Show your support today!"
          url="https://www.paypal.me/seeingblue"
          text="Support"
        />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;