import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <section className={this.props.section}>
        <div className={this.props.div}>
          <Renderbox left={this.props.left} icon={this.props.icon} boxurl={this.props.boxurl} boxurltext={this.props.boxurltext} boxtext={this.props.boxtext} />
        </div>
      </section>
    );
  }
}

function Renderbox(props) {
  if (props.left === true) {
    return LeftAlignIcon(props)
  }else{
    return TopAlignIcon(props)
  }
}

function TopAlignIcon(props) {
  return (
    <React.Fragment>      
      <i className="icon major"> {props.icon}</i>
      <h3>
        <a href={props.boxurl}>{props.boxurltext}</a>
      </h3>
      <p>
        {props.boxtext}
      </p>
    </React.Fragment>
  );
}

function LeftAlignIcon(props) {
  return (
    <React.Fragment>
      <div className="image left">
      <i className="icon major">{props.icon}</i>
      </div>
      <div className="inner">
        <h3>{props.boxurltext}</h3>
        <p>
          {props.boxtext}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Box;
