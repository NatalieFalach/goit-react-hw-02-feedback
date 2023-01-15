import {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statisctics from './Statistics/Statistics';
import styles from './App.module.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  feedbackOptions = ['good', 'neutral', 'bad'];

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const result = (100 / this.countTotalFeedback()) * this.state.good
    return `${result.toFixed()}%`
  }

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
       return {[option]: prevState[option] + 1}
    })
  }

  render() {
    const { good, neutral, bad} = this.state

    return (
      <div className={styles.wrapper}>
        <Section title={'Please levave feedback'}>
          <FeedbackOptions options={this.feedbackOptions} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        
        <Section title={'Statistics'}>
          <Statisctics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    )
  }
}

export default App;
