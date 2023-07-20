import PropTypes from 'prop-types'; 

export default function FeedbackOptions({ options, leaveFeedback }){
    return(
        <div className="buttons">
            {options.map(option => (
                <button key={option} name={option} onClick={leaveFeedback} type="button">{option}</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    leaveFeedback: PropTypes.func.isRequired
}