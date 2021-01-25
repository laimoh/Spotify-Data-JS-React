import React from 'react'

const Playlist = () => {
   return (
      <div style={{
         width: '25%',
         display: "inline-block",
         marginLeft: '2vw',
         marginRight: '2vw',
         color: '#F7C548',
         backgroundColor: '#437C90',
         borderRadius: '20px',
         padding: '1rem'
      }}>
         <img></img>
         <h3>Playlist Name</h3>
         <ul>
            <li>
               Song 1
            </li>
            <li>
               Song 2
            </li>
            <li>
               Song 3
            </li>
         </ul>
      </div>
   )
}

export default Playlist
