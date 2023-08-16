import './App.css'
import { useState } from 'react'
import { FaStar } from "react-icons/fa"


function App() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div className='app'>
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                name='rating'
                type="radio"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className='star'
                size={50}
                color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        })}

      </div>
      <p className='text1 '>Your rating is {rating}</p>
    </>
  )
}

export default App


