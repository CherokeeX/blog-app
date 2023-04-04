import React, { Component } from 'react'

export default class BlogForm extends Component {

state  = {
  title:'',
  description:'',
  error:''
}
onTitleChange =(e)=>{
  const title = e.target.value;
  this.setState (()=>({
    title
  }))
}
onDescriptionChange= (e)=> {
  const description = e.target.value;
  this.setState (()=>({
    description
  }))
}

onSubmit=(e)=>{
  e.preventDefault();
  if(!this.state.title || !this.state.description){
    this.setState({error: 'Fill the Blanks Please'});
  }else{
    this.setState({error: ''});
    this.props.onSubmite({
      title:this.state.title,
      description:this.state.description,
      dateAdded : Date.now()
      

    })
    
  }

}
  render() {

    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <input  placeholder='fill Title' value={this.state.title} onChange={this.onTitleChange}/>

          </div>
          <div>
            <textarea placeholder='Enter description' value={this.state.description} onChange={this.onDescriptionChange}></textarea>
          </div>
          <button type="submit">ADD BLOG</button>
        </form>
      </div>
    )
  }
}
