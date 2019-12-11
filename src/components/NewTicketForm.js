import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTicketForm(props){
<<<<<<< HEAD
  let names = null;
  let location = null;
  let issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: names.value, location: location.value, issue: issue.value});
    names.value = '';
    location.value = '';
    issue.value = '';
=======
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
>>>>>>> 88ac8f51db1e3fc05ea2a652f31d6d103f18ad4a
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
<<<<<<< HEAD
          id='names'
          placeholder='Pair Names'
          ref={(input) => {names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {issue = textarea;}}/>
=======
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
>>>>>>> 88ac8f51db1e3fc05ea2a652f31d6d103f18ad4a
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;