import React from 'react'
import { features }  from '../../constants'
import FeatureCard from './card/FeatureCard'
import './courses.css'

const Courses = () => {
  return (
    <section className="course" id='courses'>
      <h1>
        Why Swiftrise?
      </h1>
      <p>
        Let Us Elevate Your World
      </p>

      <div className="row">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Courses