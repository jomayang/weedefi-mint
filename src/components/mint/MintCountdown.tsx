import Countdown from "react-countdown";
import classes from "./MintCountdown.module.css";
import { Col, Row } from "react-bootstrap";

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
}

interface MintCountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const MintCountdown: React.FC<MintCountdownProps> = ({
  date,
  status,
  onComplete,
}) => {
  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: MintCountdownRender) => {
    hours += days * 24;
    if (completed) {
      return status ? (
        <div className="countdown-status flex items-center justify-end">
          <span className="flex h-3 w-3 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          {status}
        </div>
      ) : null;
    } else {
      return (
        <div className={classes.singleIco}>
          <h5>Sale starts in :</h5>
          <Row>
            <Col>
              <span className={classes.days}>
                {days < 10 ? `0${days}` : days}
              </span>
              <h5>days</h5>
            </Col>
            <Col>
              <span className={classes.hours}>
                {hours < 10 ? `0${hours}` : hours}
              </span>
              <h5>hours</h5>
            </Col>
            <Col>
              <span className={classes.minutes}>
                {minutes < 10 ? `0${minutes}` : minutes}
              </span>
              <h5>minutes</h5>
            </Col>
            <Col>
              <span className={classes.seconds}>
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
              <h5>seconds</h5>
            </Col>
          </Row>
        </div>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};
