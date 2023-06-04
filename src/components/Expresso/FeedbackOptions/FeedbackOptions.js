import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, addFeedback }) => {
    return (
      <div className='boxBtn'>
        {options.map(option => (
          <button
            key={option}
            onClick={() => addFeedback(option)}
            className={css.button}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

export default FeedbackOptions;