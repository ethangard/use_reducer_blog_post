import React, { useState } from 'react'
import ShowBlogPost from './ShowBlogPost'
import FilterBlogPosts from './FilterBlogPosts'
import { ACTIONS } from '../App'

const ListBlogPosts = ({ blogPosts, dispatch, categories }) => {
  // const deleteHandler = (blogPostId) => {
  //   dispatch({ type: ACTIONS.DELETE_BLOG_POST, payload: { id: blogPostId } })
  // }

  const filterBlogPostHandler = (e) => {
    if (e.target.value.length > 1) {
      dispatch({
        type: ACTIONS.FILTER_BLOG_POST,
        payload: { query: e.target.value },
      })
    }
  }

  const [query, setQuery] = useState('')

  return (
    <>
      {/* <FilterBlogPosts dispatch={dispatch} /> */}
      <>
        <label htmlFor="search">Filter Blog Post Title</label>
        <input
          name="search"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        {/* <FilterBlogPosts dispatch={dispatch} /> */}
      </>
      <hr />
      {/* {blogPosts
        .filter((blogPost) => {
          if (blogPost.title.toLowerCase().includes(query.toLowerCase())) {
            return blogPost
          }
        }) */}
      {blogPosts
        .filter((blogPost) => {
          if (blogPost.title.toLowerCase().includes(query.toLowerCase())) {
            return blogPost
          }
        })
        .map((blogPost) => {
          return (
            <ShowBlogPost
              blogPost={blogPost}
              categories={categories}
              dispatch={dispatch}
              key={blogPost.id}
            />
          )
        })}
    </>
  )
}

export default ListBlogPosts
