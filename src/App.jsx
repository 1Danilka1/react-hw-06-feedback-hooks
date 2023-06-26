import React, { Component } from "react";
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section";
import css from './App.module.css';


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  leaveFeedback = (event) => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return (Math.round(this.state.good / this.countTotalFeedback() * 100));
  }
  render(){

    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} leaveFeedback={this.leaveFeedback}/>
        </Section>
        <Section title="Statistic">
          {totalFeedback ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage}/>
            ) : (
            <Notification notify='There is no feedback'/>
          )}
        </Section>
      </div>
    )
  }
}