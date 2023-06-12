import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';
 const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
     return (<div>
          <StatisticsList>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive Feedback: {positivePercentage}%</p>
          </li>
          </StatisticsList>
        </div>
)
}
Statistics.propTypes = {
  good:PropTypes.element.isRequired,
  neutral:PropTypes.element.isRequired,
  bad:PropTypes.element.isRequired,
  total:PropTypes.element.isRequired,
  positivePercentage:PropTypes.element.isRequired
  
}
export default Statistics;