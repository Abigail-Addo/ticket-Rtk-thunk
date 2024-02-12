// import React from 'react'
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

const TicketList = () => {
  // const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  return (
    <div className="ticketBox">
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} key={ticket._id} />
      ))}
    </div>
  );
};

export default TicketList;
