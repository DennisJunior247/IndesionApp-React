import React from 'react'
import Action from './Components/Action'
import Header from './Components/Header'
import AddOption from './Components/AddOption '
import Options from './Components/Options'
import OptionModal from "./Components/OptionModal"
class IndecisionApp extends React.Component{
  state={
    options:[],
    selectedOption: undefined
  }
  handelDeleteOptions=()=>{  
    this.setState(()=>({
      options: []
  }))
}
handelDeleteSelectedOption=()=>{
  this.setState(()=>({
    selectedOption:undefined
  }))
}
componentDidMount=()=>{

try{
  const json = localStorage.getItem("options")
  const options = JSON.parse(json)
  if (options){
  this.setState(()=>({options}))
 }
}
catch(e){
 
}

}
componentDidUpdate=(prevProps,prevState)=>{
 if(prevState.options.length!==this.state.options.length){
   const json = JSON.stringify(this.state.options)
   localStorage.setItem("options",json)
 }
}
  handelPick=()=>{
    const random= Math.floor(Math.random()*this.state.options.length)
    const option= this.state.options[random]
   this.setState({selectedOption:option})
  }
  handelAddOption=(option)=>{
    if(!option){
      return 'enter vaid value to add item'
    } else if(this.state.options.indexOf(option)>-1){
      return "this option already exist"
    }
    this.setState((prevState)=>({   
      options: prevState.options.concat(option)
    }))
  }
  handelDeleteOption=(optionToremove)=>{
    this.setState((prevState)=>({
     options: prevState.options.filter((option)=>{
      return   optionToremove !==  option 
     })
    }))
  }
  render(){
    const title = "indecision"
    const subtitle= "put your life in the hands of a computer"
    return(
      <div className="backGround">
         <Header title={title} subtitle={subtitle} />
        <div className='container '>
      <Action hasOptions={this.state.options.length>0} handelPick={this.handelPick}/>
    <div className="widget">
    <Options options={this.state.options}  handelDeleteOptions={ this.handelDeleteOptions} handelDeleteOption={this.handelDeleteOption} />
      <AddOption handelAddOption={this.handelAddOption}/>
    </div >
        </div>
      <OptionModal selectedOption={this.state.selectedOption} handelDeleteSelectedOption={this.handelDeleteSelectedOption}/>
      </div>

      
    )
  }
}


export default IndecisionApp;




