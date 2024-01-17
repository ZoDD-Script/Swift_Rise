import React from 'react'

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="testimonial-col">     
      <img src={img} alt="" />
      <div>
        <p>
          {content}
        </p>
        <h3>{name}</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-o"></i>
      </div>
    </div>
  )
}

export default FeedBackCard