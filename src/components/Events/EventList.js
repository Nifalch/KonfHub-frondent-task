import React, { useEffect, useState } from 'react';
import { fetchEvent } from '../../services/api';
import EventCard from './EventCard';

const EventList = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchEvent();
        console.log("Data fetched:", data);
        setEvent(data);
      } catch (error) {
        console.error(error);
      }
    };

    getEvent();
  }, []);

  return (
    <div className="event-list">
      {event ? <EventCard event={event} /> : <p>No event available</p>}
    </div>
  );
};

export default EventList;
