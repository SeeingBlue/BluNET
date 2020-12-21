import React, { Component } from "react";
class Bigheader extends Component {
  render() {
    return (
      <section className="wrapper style2">
        <div className="container">
          <header className="major">
            <h2>{this.props.h2text}</h2>
            <p>{this.props.text}</p>
          </header>
        </div>
      </section>
    );
  }
}
export default Bigheader;
