import React, { Component } from "react";
import Cta from "../components/SupportToday";
import Header from "../components/Header";
import Boxrow from "../components/boxes/Boxrow";
import Bigheader from "../components/BigSectionTitle";
import Footer from "../components/Footer";
import topbox from "../json/topBox";
import bottombox1 from "../json/bottomBox1";
import bottombox2 from "../json/bottomBox2";

export default function Home() {
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
            <Boxrow boxarray={topbox} />
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
            <Boxrow boxarray={bottombox1} />
          </div>
          <div className="row">
            <Boxrow boxarray={bottombox2} />
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
