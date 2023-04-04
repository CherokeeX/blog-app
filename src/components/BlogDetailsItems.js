import React from 'react'

const BlogDetailsItems = ({id,title,description}) => {
  return (
    <div>
            <p>Blog id : {id}</p>
            <p>Blog Title : {title}</p>
            <p>Blog Description : {description}</p>

    </div>
  )
}

export default BlogDetailsItems