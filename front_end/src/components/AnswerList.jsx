import React from 'react';
import AnswerItem from './AnswerItem';
import './css/qna-styles.css'; // Import your custom CSS file

function AnswerList({ answers, rateAnswer }) {
  return (
    <div>
      <h4>Answers</h4>
      {answers.map((answer, index) => (
        <AnswerItem key={index} answer={answer} rateAnswer={(rating) => rateAnswer(index, rating)} />
      ))}
    </div>
  );
}

export default AnswerList;
