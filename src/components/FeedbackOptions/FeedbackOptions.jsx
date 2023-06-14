import PropTypes from 'prop-types';
import { FeedbackWrap, FeedbackButton } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {options.map(option => {
        return (
          <FeedbackButton
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </FeedbackWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
