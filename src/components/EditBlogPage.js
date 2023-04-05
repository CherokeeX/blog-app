import React from 'react'
import BlogForm from './BlogForm'
import {  connect } from 'react-redux'

const EditBlogPage = (props) => {
  return (
    <div>
         <h1>Edit  Blog PAge</h1>
         <BlogForm blog={props.blog}/>


    </div>
  )
}
const mapStateToProps = (state,props)=>{
    return {
        blog:state.blogs.find((b)=>{
            return b.id===props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage);