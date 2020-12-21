import React, { Component } from "react";
class Cta extends Component {
  render() {
    return (
      <section id="cta" className="wrapper style3">
        <div className="container">
          <header>
            <h2>{this.props.h2}</h2>
            <a href={this.props.url} className="button">
              {this.props.text}
            </a>
          </header>
        </div>
      </section>
    );
  }
}
export default Cta;
