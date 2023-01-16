import PropTypes from 'prop-types';
import Notification from "components/Notification/Notification";

const Statisctics = ({ good, neutral, bad, total, positivePercentage }) => {

  return (
    <>
        {total ? (
          <>
            <p>Good: {good }</p>
            <p>Neural: { neutral }</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedaback: { positivePercentage }</p>
          </>
        ): <Notification message ="There is no feedback"/>}
        
      </>
  )
}
Statisctics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
  }

export default Statisctics;