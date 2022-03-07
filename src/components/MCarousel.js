import React from 'react'
import {Carousel} from 'react-bootstrap'
const MCarousel = () => {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/6168c17121323e3baa39fcc1/1634264578438-04NC7R1S5EB1ML7VBQRC/arduventure.gif?format=500w"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/6168c17121323e3baa39fcc1/1634264346804-6DWF85P34V64YQBB977Y/microcity1.gif?format=500w"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/6168c17121323e3baa39fcc1/1638233829330-86E187OOTLUSF4KW0R30/darkandunder1.gif?format=500w"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default MCarousel