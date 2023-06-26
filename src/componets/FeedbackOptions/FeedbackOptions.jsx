import PropTypes from 'prop-types';
import './FeedbackOptions.css'

export default function FeedbackOptions({ options, leaveFeedback }){
    return(
        <div class="buttons">
            {options.map(option => (
                <button key={option} name={option} className={`${option}-btn btn`} onClick={leaveFeedback} type="button">{option}</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    leaveFeedback: PropTypes.func.isRequired
}