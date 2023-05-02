import React from 'react'
import { ACTIONS } from '../App'

const SortBlogPost = ({ categories, dispatch }) => {
  const handleSortBlogPosts = (e) => {
    dispatch({
      type: ACTIONS.SORT_BLOG_POST,
      payload: { query: e.target.value },
    })
  }

  const handleResetSort = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <>
      <label htmlFor="sort-post"></label>
      <label htmlFor="sort-post">Sort</label>
      <select name="category" onChange={handleSortBlogPosts}>
        {categories.map((category) => {
          return (
            <option key={category} name={category} value={category}>
              {category}
            </option>
          )
        })}
      </select>
      <button onClick={handleResetSort}>Reset</button>
    </>
  )
}

export default SortBlogPost
