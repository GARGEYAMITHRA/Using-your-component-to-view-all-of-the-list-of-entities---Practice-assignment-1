// write the book component code here
import React from 'react'

function Bookscard({name,genre,author,image}) {
  return (
    <div>
      <h1>{name}</h1>
       <h1>{genre}</h1>
       <h1>{author}</h1>
       <img src={image} />


    </div>
    
  )
}

export default Bookscard