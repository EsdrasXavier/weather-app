import moment from 'moment';
import * as React from 'react';
import useInterval from '../../utils/useInterval';

interface Props {
  showSeconds?: boolean;
}

const getCurrentTime = (showSeconds: boolean): string => {
  const secs = showSeconds ? ':ss' : '';
  const format = `HH:mm${secs}`;
  return moment().format(format);
};

const CurrentTime: React.FC<Props> = ({ showSeconds = true }) => {
  const [currentTime, setCurrentTime] = React.useState<string>(
    getCurrentTime(showSeconds)
  );

  const updateUi = React.useCallback(() => {
    setCurrentTime(getCurrentTime(showSeconds));
  }, [showSeconds]);

  useInterval(updateUi, 1000);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default CurrentTime;
