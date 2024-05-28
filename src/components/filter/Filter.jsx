import React from 'react'
import "./filter.scss"
function Filter() {
  return (
    <div className='filter'>
      <h1>Search results for <b>Rongai</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
          <option value="Rent">any</option>
          <option value="Rent">Buy</option>
            <option value="Rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="Property">Property</label>
          <select name="property" id="property">
            <option value="single">Single</option>
            <option value="doubles">Double</option>
            <option value="bedsitter">Bedsitter</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id='maxPrice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" id='bedroom' placeholder='any' />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter
