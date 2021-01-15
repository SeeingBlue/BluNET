import React, { Component } from "react";
import Box from './Box';
class Boxrow extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.boxarray.map(box => (
          <Box section={box.section} div={box.div} left={box.left} icon={box.icon} boxurl={box.boxurl} boxurltext={box.boxurltext} boxtext={box.boxtext} />
        ))}
      </React.Fragment>
    );
  }
}
export default Boxrow;
