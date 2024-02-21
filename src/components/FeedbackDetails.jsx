import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackDetails() {
  const { feedback } = useContext(FeedbackContext);
  const params = useParams();
  const navigate = useNavigate();
  const currentvalue = feedback.find((feedback) => feedback.id === params._id);

  const navhandler = () => {
    console.log("Successful navigation or redirect");
    navigate("/");
  };

  return (
    <Card>
      <div className="num-display">{currentvalue.rating}</div>
      <div className="text-display">{currentvalue.text}</div>
      <button type={"button"} onClick={navhandler}>
        Back to home
      </button>
    </Card>
  );
}

export default FeedbackDetails;
