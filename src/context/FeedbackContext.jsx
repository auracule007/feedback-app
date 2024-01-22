import  { createContext, useEffect, useState } from "react";
// import FeedbackData from "../data/FeedbackData"

const FeedbackContext = createContext()

export function FeedbackProvider ({ children }) {
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false 
    });

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const response= await fetch("http://localhost:3000/feedback")
        const data = await response.json();
        setFeedback(data)
    };

    // CRUD 
    const editHandler = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    };

    const updatedFeedback = async (id, uptItem) => {
        const response = await fetch(`http://localhost:3000/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uptItem)
        })
        const data = await response.json()
        setFeedbackEdit(feedback.map((item) => item.id === id ? {...item, ...data} : item ))
    };

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?...')) {
            await fetch(`http://localhost:3000/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    };
  
    const addFeedback = async (newfeedback) => {
        const response = await fetch("http://localhost:3000/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newfeedback)
        })
        const data = await response.json()
        setFeedback([ data, ...feedback ])
    };
    

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            addFeedback,
            deleteFeedback,
            editHandler,
            updatedFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
};

export default FeedbackContext;
