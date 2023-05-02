import React from 'react'
import { ACTIONS } from '../App'

const FilterBlogPosts = ({ dispatch }) => {
  const filterBlogPostHandler = (e) => {
    if (e.target.value.length > 1) {
      dispatch({
        type: ACTIONS.FILTER_BLOG_POST,
        payload: { query: e.target.value },
      })
    }
  }

  return (
    <>
      <label htmlFor="search">Filter Blog Post Title</label>
      <input name="search" type="text" onChange={filterBlogPostHandler} />
    </>
  )
}

export default FilterBlogPosts
