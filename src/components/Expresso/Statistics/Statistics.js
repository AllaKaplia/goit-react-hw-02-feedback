import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return<div>
        <span className={css.textFeedback}>Good: {good}</span>
        <span className={css.textFeedback}>Neutral: {neutral}</span>
        <span className={css.textFeedback}>Bad: {bad}</span>
        <span className={css.textFeedback}>Total: {total}</span>
        <span className={css.textFeedback}>Positive feedback: {positivePercentage}%</span>
    </div>
}

export default Statistics;