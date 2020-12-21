import React, { Component } from "react";
class Bigheader2 extends Component {
  render() {
    return (
      <section className="wrapper style1">
        <div className="container">
            <h1>{this.props.h1text}</h1>
        </div>
      </section>
    );
  }
}
export default Bigheader2;
