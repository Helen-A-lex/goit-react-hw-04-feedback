import PropTypes from 'prop-types';
import {FeedbackWrap, FeedbackButton} from "./FeedbackOptions.styled"
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackWrap>
            {options.map(option => {
                return (
                <FeedbackButton type="button" key={option} onClick={() => onLeaveFeedback(option)}>
                {option}
                </FeedbackButton >)
            })}
        </FeedbackWrap>
    )
}
FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.func.isRequired,
        neutral: PropTypes.func.isRequired,
        bad: PropTypes.func.isRequired
    }),
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;