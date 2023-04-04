import React, { Component } from 'react'

export default class BlogForm extends Component {

state  = {
  title:'',
  description:'',
  DateAdded: Date.now()
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
    console.log('error ')
  }else{
    console.log(this.state.title, this.state.description)
    console.log('submited');  
  }

}
  render() {

    return (
      <div>
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
