import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
     return <h2>No Feedback yet!!</h2>
  }
  return (
    <div>
        {feedback.map((item, index) => (
            <FeedbackItem key={index} feedbackitem = {item} />
        ))}
    </div>
  )
}

export default FeedbackList;
