import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './components/Button';
import './Ticket.styles.scss';
import TicketBox from './components/TicketBox';

import getDataAction from './components/Redux/Actions/actions';

const buttons = ['Status', 'Priority', 'Date Posted'];

const Ticket = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    // Get the data from the dumb to map it to the page
    dispatch(getDataAction());
  }, [data]);
  return (
    <>
      <div className="Ticket">
        <div className="Ticket__title">
          <h1>My Ticket</h1>
        </div>
        <div className="Ticket__buttons">
          {buttons.map((button) => {
            return <Button name={button} />;
          })}
        </div>
        <TicketBox />
        <TicketBox />
        <TicketBox />
      </div>
    </>
  );
};

Ticket.propTypes = {};

export default Ticket;
