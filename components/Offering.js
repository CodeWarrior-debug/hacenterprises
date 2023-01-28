import React from 'react'

const Offering = (props) => {
    const { color, jsx}=props;

  return (
    <>
    <div className={color}>
      {/* {jsx.inner} */}
      {jsx}
      </div>
    </>
  )
}

export default Offering
