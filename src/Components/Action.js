import React from 'react'
class Action extends React.Component { 
    render() {
      return (
        <div>
          <button
          className="big-button"
          disabled={!this.props.hasOptions}
           onClick={this.props.handelPick}
           >
             What should I do?
           </button>
        </div>
      );
    }
  }
  export default Action;