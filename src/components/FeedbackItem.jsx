import Card from "./shared/Card";
import { Link } from "react-router-dom";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { useAuth } from "../context/AuthContext";

function FeedbackItem({ feedbackitem }) {
  const { deleteFeedback, editHandler } = useContext(FeedbackContext);
  const [state, dispatch] = useAuth();
  const isAuthenticated = state.accessToken != null;

  return (
    <>
      <Card>
        <div className="num-display">{feedbackitem.rating}</div>
        {isAuthenticated && (
          <>
          <button
            type="button"
            className="delete"
            onClick={() => deleteFeedback(feedbackitem._id)}
          >
            <FaTimes />
          </button>
          <button
            type="button"
            className="edit"
            onClick={() => editHandler(feedbackitem)}
          >
            <FaEdit />
          </button>
          </>
        )}
        <div className="text-display">{feedbackitem.text}</div>

        <Link to={`/api/feedback/${feedbackitem._id}`}>View More</Link>
      </Card>
    </>
  );
}

export default FeedbackItem;
