import { connect } from "react-redux";
import React from "react";
import BlogListItems from "./BlogListItems";

const BlogList = (props) => {
  return <>
  <ul>
    {props.blogs.map(blog =>{return <BlogListItems key={blog.id}  {...blog}/>})
    }
  </ul>
  </>
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };  
};

export default connect(mapStateToProps)(BlogList);
