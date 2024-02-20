// import React from 'react'
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

const TicketList = () => {
  // const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);


  return (
    <>
      {tickets.map((ticket) => (
        <div className="ticketBox" key={ticket._id}>
          <Ticket ticket={ticket}  />
        </div>
      ))}
    </>
  );
};

export default TicketList;
