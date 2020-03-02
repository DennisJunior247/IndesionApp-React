import React from 'react'
 class AddOption extends React.Component {
   state={
     error:undefined
   }

  handleAddOption=(e)=>{
  e.preventDefault();

  const option = e.target.elements.option.value.trim()
 const error =  this.props.handelAddOption(option)
  this.setState(()=>{
  return {error}
  })
  if(!error){
    e.target.elements.option.value=''

  }
}
    render() {
      return (
        <div>
          {this.state.error&&<p className="add-option-error">{this.state.error}</p>}
        <form className="add-option"
        onSubmit={this.handleAddOption} >
         <input className="add-option-inp"
          type="text" name="option"
         autoComplete="off"/>
         <button className="button" >submit</button>
        </form>
        </div>
      );
    }
  }
  export default AddOption