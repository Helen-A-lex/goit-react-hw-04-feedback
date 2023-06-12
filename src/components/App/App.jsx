import { Component } from "react";
import { GlobalStyle } from "components/GlobalStyle";
import { Layout } from "components/Layout";
import Statistics  from "components/Statistics";
import FeedbackOptions  from "components/FeedbackOptions";
import Section  from "components/Section";
import Notification from "components/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0

  };

  

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  
     
  };

 countPositiveFeedbackPercentage = () => {
   const { good } = this.state;
   const countTotalFeedback = this.countTotalFeedback();
   if ( countTotalFeedback === 0) {
      return 0;
    }
   return Math.round((good / countTotalFeedback) * 100);
     
  };


  onLeaveFeedback = (option) => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1,
  }));
};

  render() {
    const { good, neutral,bad} = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
   const optionsForFeedback = Object.keys(this.state);
    return (
      <Layout>
        <GlobalStyle/>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsForFeedback}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {countTotalFeedback > 0 ? <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
        </Section>: <Notification message="There is no feedback" />}
      </Layout>
 
     )
   }
};
