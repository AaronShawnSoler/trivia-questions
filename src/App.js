import React from 'react';
import './App.css';

import Question from './components/Question';
import { connect } from 'react-redux';

import { getQuestions } from './middleware/middleware';

function App(props) {

  const fetchQuestions = event => {
    props.getQuestions();
  }

  console.log(props);
  return (
    <div className="App">
      <h1>Trivia Game Questions</h1>
      <button onClick={fetchQuestions}>Get 10 Questions</button>
      {props.results.map((question, index) => <Question questionData={question} key={index}/>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.results,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {getQuestions})(App);
