/* eslint-disable react/prop-types */
// import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTicketThunk, updateTicketThunk } from '../store/features/tickets/ticketSlice'


const Ticket = ({ticket}) => {
  const dispatch = useDispatch();

  
  return (
    <div className='ticketSheet'>
      <div className='ticketCard'>
        <p className='title'>{ticket.title}</p>
        <p>{ticket.description}</p>

        <div className='ticketButtons'>
          <button className='changeBtn' onClick={() => dispatch(deleteTicketThunk(ticket._id))}>Delete</button>
          <button className='changeBtn' onClick={() => dispatch(updateTicketThunk(ticket._id))}>Edit</button>
        </div>


      </div>
    </div>
  )
}


export default Ticket;


