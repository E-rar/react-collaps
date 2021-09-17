import React from 'react';

class Collaps extends React.Component {
    state = {

        isOpen:false,
        isOpen2:false
    }
    handleIsOpen= () => {
        this.setState({isOpen:!this.state.isOpen});
    }
    handleIsOpen2= () => {
        this.setState({isOpen2:!this.state.isOpen2});
    }
    render() { 
        return <div>
            <div className='question flex'>
                <h2>
                    Why is react great?
                </h2>
                <button onClick={this.handleIsOpen}>
                    {this.state.isOpen ?'-':'+'}
                </button>
            </div>
            <div className='answer' style={{display:this.state.isOpen?'block':'none'}}>
                <div className='flex'>
                <h2>Fast Learning curve!</h2>
                <button onClick={this.handleIsOpen2}>
                    {this.state.isOpen2 ?'-':'+'}
                </button>
                </div>
                <div className='text' style={{display:this.state.isOpen2?'block':'none'}}>
                    <p>
                    React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
                    As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.

                    </p>
                </div>
            </div>
        </div>;
    }
}
 
export default Collaps;