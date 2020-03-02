import React from 'react'
class Option extends React.Component {
    render() {
      return (
        <div className="option">
          <p>{this.props.count}.  {this.props.optionText}</p>
     
        <button 
        className="button button--link"
        onClick={(e)=>this.props.handelDeleteOption(this.props.optionText)}>Remove</button>
        </div>
      );
    }
  }
  export default Option;