import React from 'react'
import { cafeteria, basketball, library } from '../../assets'
import './facilities.css'
import { facilities } from '../../constants'

const FacilityCard = ({ img, title, content }) => (
  <div className="facilities-col">
    <img src={img} alt="" />
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
)

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>We Are Beyond Products</h1>
      <p>
        A Partnership for Success.
      </p>
      <div className="row">
        {facilities.map((facility) => (
          <FacilityCard key={facility.id} {...facility} />
        ))}
      </div>
    </section>
  )
}

export default Facilities