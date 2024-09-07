import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import render1 from '../Assets/removed-bg-playard.png'
import render2 from '../Assets/removed-bg-playard2.png'
import render3 from '../Assets/removed-bg-playard3.png'
import render4 from '../Assets/removed-bg-playard4.png'
const CSlider = () => {
  return (
    <div>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={render1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={render2}
          alt="Second slide"
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={render3}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={render4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CSlider