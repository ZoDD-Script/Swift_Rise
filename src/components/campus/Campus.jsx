import React from 'react'
import { washington, newyork, london } from '../../assets'
import './campus.css'
import { campus } from '../../constants'

const CampCard = ({ image, location }) => (
  <div className="campus-col">
    <img src={image} alt="" />
    <div className="layer">
      <h3>{location}</h3>
    </div>
  </div>
)

const Campus = () => {
  return (
    <section className="campus">
      <h1>
        Our Projects
      </h1>
      <p>
        Scaling new heights in mobility! 
      </p>
      <div className="row">
        {campus.map((camp) => (
          <CampCard key={camp.id} {...camp} />
        ))}
      </div>
    </section>
  )
}

export default Campus