import React from 'react'

const FeatureCard = ({ title, content }) => {
  return (
    <div className="course-col">
      <h3>{title}</h3>
      <p>
        {content}
      </p>
    </div>
  )
}

export default FeatureCard