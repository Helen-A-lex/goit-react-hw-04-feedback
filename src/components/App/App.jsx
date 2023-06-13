import { useState } from "react";
import { GlobalStyle } from "components/GlobalStyle";
import { Layout } from "components/Layout";
import Statistics  from "components/Statistics";
import FeedbackOptions  from "components/FeedbackOptions";
import Section  from "components/Section";
import Notification from "components/Notification";

export default function App () {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const countTotalFeedback = (good,neutral,bad) => {
  return good + neutral + bad;
  
     
  };

 const countPositiveFeedbackPercentage = (good) => {
  //  const { good } = this.state;
   const countTotalFeedback = countTotalFeedback(good, neutral, bad);
   
   if ( countTotalFeedback === 0) {
      return 0;
    }
   return Math.round((good / countTotalFeedback) * 100);
     
  };


//   const onLeaveFeedback = (option) => {
//   this.setState(prevState => ({
//     [option]: prevState[option] + 1,
//   }));
// };
  const onLeaveFeedback = (type) => {
  switch (type) {
    case "good":
      setGood(good => good + 1);
      break;
    case "neutral":
      setNeutral(neutral => neutral + 1);
      break;
    case "bad":
      setBad(bad => bad + 1);
      break;
    default:
      return;
  }
}
  // render() {
    // const { good, neutral,bad} = this.state;
    // const countTotalFeedback = this.countTotalFeedback();
    // const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
  
  const optionsForFeedback = Object.keys({ good, neutral, bad });
 
  
  console.log(optionsForFeedback);
    return (
      <Layout>
        <GlobalStyle/>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsForFeedback}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {countTotalFeedback > 0 ? <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
        </Section>: <Notification message="There is no feedback" />}
      </Layout>
 
     )
   }
