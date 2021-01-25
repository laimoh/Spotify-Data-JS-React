import React from 'react'

const ocre = '#A98743';

const Header = () => {
   return (
      <div style={
         {
            width: "50%",
            display: "inline-block",
            // 'border-radius': "20px",
            // 'border': 'solid black 1px'
         }
      }>
         <h2 style={{ color: ocre, fontSize: "1rem" }} >Some text and number</h2>
      </div >
   )
}

export default Header

