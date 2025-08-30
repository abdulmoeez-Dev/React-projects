import React from 'react'

function Buttoncmp({title , onClick , style}) {
  return (
   <button onClick={onClick} style={{...style}}>
    {title || "Button"}
   </button>
  )
}

export default Buttoncmp
