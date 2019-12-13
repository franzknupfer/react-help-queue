import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';

function EditNewTicket(props){
  const { ticket } = props;
  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.handleEditingTicket({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: ticket.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditNewTicket.propTypes = {
  onNewTicketCreation: PropTypes.func,
  handleEditingTicket: PropTypes.func
};

export default EditNewTicket;