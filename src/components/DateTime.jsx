import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      
      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      const dayOfMonth = now.getDate();
      
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      
      const timeStr = `${hours}:${minutesStr}${ampm}`;
      
      setDateTime(`${dayName} ${monthName} ${dayOfMonth} ${timeStr}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {dateTime}
    </div>
  );
}

export default DateTime;
