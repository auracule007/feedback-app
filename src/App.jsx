import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import FeedbackDetails from "./components/FeedbackDetails";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
 
  return (
    <FeedbackProvider>
      <Router>
        <Header />
          <div className="container">
            <Routes>
              < Route path="/" element={
                <>
                  <FeedbackForm  />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              } />
              
              <Route path="/about" element={<AboutPage />} />
              <Route path="/feedback/:id" element={<FeedbackDetails />} />
          </Routes>
          </div>
      </Router>
    </FeedbackProvider>
  )
}
// npm i uuid 

export default App;

































// function App() {
//   const person = "Dennis"

//   const stud = [
//     {name: "idris"},
//     {name: "hasrrison"},
//     {name: "dennis"},
//     {name: "vincent"},
//   ]
//   return (
//     <>
//         <h1>Hello {person}</h1>
//         <ul>
//           {stud.map((student, index)=>(<li key={index}>{student.name}</li>))}
//         </ul>
//     </>
//   )
// }

// export default App;
