import React from 'react';
import { connect } from 'react-redux';
import BlogDetailsItems from './BlogDetailsItems';

const BlogDetailsPage = (props) => {
    return (
        <div>
        <BlogDetailsItems {...props.blog}/>
        </div>
    )
}

const mapStateToProps =(state,props)=>{
    return {
        blog: state.blogs.find((blog)=>{
            return blog.id===props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(BlogDetailsPage);
