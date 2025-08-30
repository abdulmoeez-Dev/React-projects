import React from 'react'


const Inputfield = ({type = "text" , placeholder , onChange , value}) => {
return (
    <input 
    type={type}
    placeholder={placeholder} 
    onChange={onChange} 
    value={value} />
  )
  
}

export default Inputfield
