import { useState } from 'react';
const GetCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  const newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  setInterval(() => setTime(new Date().getSeconds()), 1000);
  return `${hours}:${minutes}`;
};

export default GetCurrentTime;
