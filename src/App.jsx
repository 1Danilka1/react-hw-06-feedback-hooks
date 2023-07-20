import React, { Component } from "react";
import Statistics from './componets/Statistics/Statistics';
import Notification from './componets/Notification/Notification';
import FeedbackOptions from "./componets/FeedbackOptions/FeedbackOptions"
import Section from "./componets/Section/Section";
import { useState } from "react";


// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   leaveFeedback = (event) => {
//     const name = event.target.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1
//     }))
//   }
  
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     return (Math.round(this.state.good / this.countTotalFeedback() * 100));
//   }
//   render(){

//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
    
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={['good', 'neutral', 'bad']} leaveFeedback={this.leaveFeedback}/>
//         </Section>
//         <Section title="Statistic">
//           {totalFeedback ? (
//             <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage}/>
//             ) : (
//             <Notification notify='There is no feedback'/>
//           )}
//         </Section>
//       </div>
//     )
//   }
// }

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function total() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((100 * good) / total());
  }

  function changeResponse(e) {
    console.log(e.target);
    if (e.target.name === 'good') {
      setGood(prevGood => prevGood + 1);
    } 
    if (e.target.name === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1)
    }
    if (e.target.name === 'bad') {
      setBad(prevBad => prevBad + 1)
    }
  }

  return (
    <>
      <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          leaveFeedback={changeResponse} 
        />
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification notify='There is no feedback'/>
        )}
      </Section>
    </div>
    </>
  )
}