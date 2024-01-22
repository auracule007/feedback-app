import React, { useContext, useEffect, useState } from 'react'
import Card from "./shared/Card";
import Button from "./shared/Button";
import SelectRated from './SelectRated';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {
    const { addFeedback, feedbackEdit, updatedFeedback  } = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(6)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit]);

    const handleFeedback = (e) => {
        if (text === '') {
            setMessage(null)
            setBtnDisabled(true)
        }else if(text !== null && text.trim().length <= 15) {
            setMessage("You must have at least 15 characters")
            setBtnDisabled(true)
        }else{
            setBtnDisabled(false)
            setMessage("")
        }
        setText(e.target.value)
        // console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        if (text.trim().length > 15) {
            const newfeedback = {
                text: text,
                rating: rating 
            }
            if (feedbackEdit.item ===  true) {
                updatedFeedback(feedbackEdit.item.id, newfeedback)
            }else{
                addFeedback(newfeedback)
            }
            console.log(newfeedback);
        }
        setText("");
        e.preventDefault();
    };

    return (
        <Card>
            <h2>How would you like to rate our service?</h2>
            <form onSubmit={handleSubmit}>
                <SelectRated select= {(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" value={text} placeholder="Write a review" onChange={handleFeedback} />
                    <Button type={"submit"} isDisabled={btnDisabled} version={"secondary"}>Send</Button>
                </div>
            </form>
            {message && <div className="message">{message}</div>}
        </Card>
    )
}

export default FeedbackForm;
