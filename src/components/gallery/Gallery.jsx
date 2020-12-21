import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './Gallery.css';
import { Container } from "react-bootstrap";
import images from '../UtbImages';
class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="">
          <Carousel>
            <Carousel.Item>
              <img src={images.main} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images.accounts} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images.viewergroups} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images.trivia} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={images.bets} />
            </Carousel.Item>
          </Carousel>
        </Container>
      </React.Fragment>
    );
  }
}
export default Gallery;
