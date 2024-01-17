import React from 'react'
import { feedback } from '../../constants'
import './testimonials.css'
import FeedBackCard from './card/FeedBackCard'

const Testimonials = () => {
  return (
    <section className="testimonials" id='testimonies'>
      <h3>What Our Clients Have To Say</h3>
      <p>We provide a promise – a promise of quality, reliability, and partnership.</p>
      <div className="row">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials