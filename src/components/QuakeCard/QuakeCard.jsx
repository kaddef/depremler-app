import "./QuakeCard.css";
import "./Severity.css";
import PropTypes from "prop-types";
import { FaRulerVertical, FaRegClock } from "react-icons/fa";
import { RiPinDistanceLine } from "react-icons/ri";
import { calculateDistance, getElapsedTime, getClassByMagnitude } from "../../utils.js";

function QuakeCard({ magnitude, location, depth, time, quakeCoord, userLoc, authorized }) {
  const elapsedTime = getElapsedTime(time);
  const cardClass = getClassByMagnitude(magnitude);
  const magClass = `${cardClass}mag`;
  let distance;
  if (authorized === true && userLoc && quakeCoord) {
    distance = calculateDistance(userLoc, quakeCoord);
  }

  return (
    <div className={`card ${cardClass}`}>
        <span className={`magnitude ${magClass}`}>{magnitude}</span>
        <div className="details-container">
            <h2 className="location">
                {location}
            </h2>
            <ul className="info-container">
                <li className="depth">
                    <FaRulerVertical className="icon"/>{depth} Km
                </li>
                <li className="time">
                    <FaRegClock className="icon"/>{elapsedTime}
                </li>
                {authorized === true ? (
                    <li className="distance">
                    <RiPinDistanceLine className="icon" />{distance} Km
                    </li>
                ) : (
                    <></>
                )}
            </ul>
        </div>
    </div>
  )
}

QuakeCard.propTypes = {
    magnitude: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    depth: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    quakeCoord: PropTypes.object.isRequired,
    userLoc: PropTypes.object,
    authorized: PropTypes.bool.isRequired
};

export default QuakeCard