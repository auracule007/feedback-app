import Card from './shared/Card';
import { Link } from 'react-router-dom';
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ feedbackitem }) {
  const { deleteFeedback, editHandler } = useContext(FeedbackContext)
  return (
    <>
      <Card>
        <div className="num-display">{feedbackitem.rating}</div>
        <button type='button' className='delete' onClick={() => deleteFeedback(feedbackitem.id) }> 
          <FaTimes />
        </button>
        <button type='button' className='edit' onClick={() => editHandler(feedbackitem) }> 
          <FaEdit />
        </button>
        <div className="text-display">
          {feedbackitem.text}
        </div>

        <Link to={`/feedback/${feedbackitem.id}`}>View More</Link>
      </Card>
    </>
  )
}

export default FeedbackItem;
