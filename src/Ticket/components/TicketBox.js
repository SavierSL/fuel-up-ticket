import React, { useEffect } from 'react';
import './TicketBox.style.scss';

const TicketBox = () => {
  return (
    <>
      <div className="ticket">
        <div className="ticket__container">
          <div className="ticket__title">
            <h1>My Title</h1>
            <p>Date now</p>
          </div>

          <p className="ticket__details">
            Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old.
            Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia,
          </p>
          <div className="ticket__status">
            <div className="ticket__status-resolved">resolved</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBox;
