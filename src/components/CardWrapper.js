import React from 'react'

const   CardWrapper = ({children , styles}) => {
  return (
    <div
      className="card"
      w={{
        base: "50%",
        sm: "40%",
        md: "30%",
        xl: "20%",
        "2xl": "20%",
      }}
      ml={"10%"}
      mb={6}
      style={{...styles}}
    >
      {children}
    </div>
  )
}

export default CardWrapper