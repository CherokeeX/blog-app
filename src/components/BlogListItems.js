import React from 'react'

 const BlogListItems = ({id,title}) => {
  return (
 <>
 <li key={id} >
{title}
 </li>
 </>
  )
}

export default BlogListItems;
