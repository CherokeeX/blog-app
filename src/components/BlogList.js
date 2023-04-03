import { connect } from "react-redux";
import React from 'react'

 export const BlogList = (props)=> {


    return (
        <div>
            {props.blogs.length}
        </div>
    )


    
}

const mapStateToProps = (state)=> {

return {

    blogs : state.blogs
}
}

export default connect (mapStateToProps)(BlogList);