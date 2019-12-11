import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  // const { ticket } = props;
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{props.ticket.location} - {props.ticket.names}</h3>
      <p><em>{props.ticket.issue}</em></p>
      <button onClick={()=> props.onDeleting(props.ticket.id) }>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onDeleting: PropTypes.func
};

export default TicketDetail;