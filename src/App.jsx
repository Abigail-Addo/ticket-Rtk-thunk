/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import "./App.css";
import TicketList from "./Components/TicketList";
import { useDispatch, useSelector } from "react-redux";
// import { addTicket } from "./Store/Features/Tickets/ticketSlice";
import { addTicketThunk, fetchTicketsThunk } from "./store/features/tickets/ticketSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  // console.log(tickets);
  const { user } = useSelector((state) => state.auth)

  const userData = !!user;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user._id)
    const ticket = {
      title,
      description,
      user: user._id
    };

    // dispatch(addTicket(ticket))
    // setTitle("")
    // setDescription("")

    dispatch(addTicketThunk(ticket, user._id));
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    if (userData) {
      dispatch(fetchTicketsThunk(user._id));
    }
  }, [navigate, userData, dispatch]);

  return (
    <>

      <div className="App">
        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="heading"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="formInput">
            <label htmlFor="desc">Description</label>
            <textarea
              type="textarea"
              col="40"
              rows="7"
              placeholder="description"
              id="desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="addBtn">
            Add Ticket
          </button>
        </form>

        <TicketList tickets={tickets} />
      </div>
    </>
  );
}

export default App;
