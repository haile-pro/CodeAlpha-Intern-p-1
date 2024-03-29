import React, { useState } from 'react';
import { askQuestion } from '../Services/apiService';
import { Button, TextInput } from 'flowbite-react';
import ReactMarkdown from 'react-markdown';
import {Link} from "react-router-dom"

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [qaHistory, setQaHistory] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!question.trim()) return; // Prevent submission if the question is empty or only whitespace

    setError('');
    setLoading(true);

    try {
      const response = await askQuestion(question);
      setQaHistory(prevQaHistory => [
        ...prevQaHistory,
        { question: question, answer: response.text }
      ]);
      setQuestion(''); // Clear the input field
    } catch (err) {
      setError('There was a problem getting the answer.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="question-form-container text-base md:container md:mx-auto  ">
  
    {loading && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="loading-gear" style={{ fontSize: '4rem' }}>⚙️</div> 
      </div>
    )}
    
      {qaHistory.map((qa, index) => (
        <div key={index} className="message-group container mb-14">
          <div className="message user-question">
            <p>Question: {qa.question}</p>
          </div>
          <div className="message ai-answer">
            <ReactMarkdown>{qa.answer}</ReactMarkdown>
          </div>
        </div>
      ))}
      {error && <div className="message error-message">Error: {error}</div>}

      <form onSubmit={handleSubmit} className="question-form pt-14 ">
       
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Ask your question here'
            className=" " 
          />
        
        <Button gradientMonochrome="cyan" type="submit" disabled={!question.trim()}>
          Submit
        </Button>
      </form>
     

     <div className="fixed top-4 right-0">
       <Link to="/about">
         <Button outline gradientDuoTone="purpleToBlue">
           About Me
         </Button>
       </Link>
       
     </div>
    </div>
  );
};

export default QuestionForm;