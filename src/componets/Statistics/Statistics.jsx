import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

export default function Statistics({ good, neutral, bad, total, positivePercentage }){
    return(
        <>
            <ul className={css.stats}>
              <li className={css.good}>Good: {good}</li>
              <li className={css.neutral}>Neutral: {neutral}</li>
              <li className={css.bad}>Bad: {bad}</li>
              <li className={css.text_stats}>Total: {total}</li>
              <li className={css.text_stats}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}