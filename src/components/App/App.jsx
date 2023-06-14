import { useState } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const countTotal = countTotalFeedback();

    if (countTotal === 0) {
      return 0;
    }
    return Math.round((good / countTotal) * 100);
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const optionsForFeedback = Object.keys({ good, neutral, bad });
  const countTotal = countTotalFeedback();
  return (
    <Layout>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsForFeedback}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotal > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Layout>
  );
}
