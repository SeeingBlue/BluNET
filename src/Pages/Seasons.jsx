import React, { Component } from "react";
import Cta from "../components/SupportToday";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seasons from "../components/seasons/index"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="page-wrapper">
        <Header activekey="/" />
        <Cta
          h2="Show your support today!"
          url="https://www.paypal.me/seeingblue"
          text="Support"
        />
        <Seasons/>
        <Cta
          h2="Show your support today!"
          url="https://www.paypal.me/seeingblue"
          text="Support"
        />
        <Footer />
        </div>
      </React.Fragment>
    );
  }
}
export default Home