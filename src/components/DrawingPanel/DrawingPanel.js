import React, { useRef } from 'react'
import Row from "./Row"

export default function DrawingPanel(props) {

    const { width, height} = props

    let rows = []

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width}/>)
      }

  return (
    <div id="drawingPanel">

      <div id="pixels">   
          {rows}
        </div>

    </div>
  )
}

