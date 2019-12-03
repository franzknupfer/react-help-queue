import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisibleOnPage: true});
    console.log(this.state);
  }

  render(){
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
    } else {
      currentlyVisibleState = <TicketList />
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