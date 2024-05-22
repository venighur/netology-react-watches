import React from 'react';
import {WatchType} from '../types';

type WatchProps = {
  data: WatchType;
  onClose: (id: string) => void;
}

function Watch({ data, onClose }: WatchProps) {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    console.log(time.getTime())
    console.log(time.getTimezoneOffset() * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeString = () => {
    const timezone = data.timezone * 3600 * 1000 + time.getTimezoneOffset() * 60 * 1000;
    const date = new Date(time.getTime() + timezone);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  return (
    <div className="watch">
      <div className="watch-header">
        <div className="city-name">{data.name}</div>
        <div className="close" id={data.id} onClick={() => onClose(data.id)}>X</div>
      </div>
      <div className="time">
        {getTimeString()}
      </div>
    </div>
  );
}

export default Watch;
