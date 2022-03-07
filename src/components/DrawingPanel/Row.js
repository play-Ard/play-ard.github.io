import React from 'react'
import Pixel from './Pixel'

export default function Row(props) {

const { width} = props
let pixels = []

for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} />)
  }

  return (
    <div>
    
    <div className="">
        
        {pixels}
    
    </div>

    </div>
  )
}
