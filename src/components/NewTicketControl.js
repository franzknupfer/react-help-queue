import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: []
    };
  }

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.slice().concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList}/>
      addTicketButton = <button onClick={this.handleClick}>Add ticket</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton} 
      </React.Fragment>
    );
  }

}

export default NewTicketControl;