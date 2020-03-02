import React from 'react'
import Option from './Option'
class Options extends React.Component {
    render() {
      return (
        <div>
          <div className="widget-header">
          <h3 className="widget-header__title">your Options</h3>
          <button 
           className="button button--link"
          onClick={this.props.handelDeleteOptions}>
            Remove All
          </button>
          </div>
          {this.props.length===0 && <p className="widget__massage" >input an option to get started </p>}
        {
          this.props.options.map((option ,index) => <Option key={option} optionText={option} count={index+1}
          handelDeleteOption={this.props.handelDeleteOption}
          />)
          }
        </div>
      );
    }
  }
  export default Options;