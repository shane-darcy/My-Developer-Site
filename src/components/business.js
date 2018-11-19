import React, { Component } from 'react';
    
    class Business extends Component {
      constructor(props) {
          super(props);
          this.state = {showModal: false};
          this.handleBusinessClick = this.handleBusinessClick.bind(this);
        }
    
      // function to handle the click
       handleBusinessClick() {
        this.setState(prevState => ({
          showModal: !prevState.showModal
        }));
      }
      
      // the render() method to put stuff into the DOM
      render() {
        // the modal you will toggle on and off
        const modal = (
          <div className="modal">
            Hello, my name is Godzilla
          </div>
        );
        
        // the return() to put your default HTML into the DOM
        return (
            // wrapper div of component
            <div className="about">
              <div className='button' onClick={this.handleBusinessClick}>
                Open Modal
              </div>
              // where you want the modal to show up
              {this.state.showModal ? modal : ''} 
            </div>
        );
      }
    }
    // export the class so you can call it elsewhere
    export default Business;