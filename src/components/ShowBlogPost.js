import React, { useReducer } from 'react'
import { ACTIONS } from '../App'
import EditBlogPost from './EditBlogPost'

const editModeReducer = (editMode, action) => {
  if (action.type === 'TOGGLE_EDIT_MODE') {
    return editMode ? false : true
  }
}

const ShowBlogPost = ({ blogPost, dispatch, categories }) => {
  const deleteHandler = (blogPostId) => {
    dispatch({ type: ACTIONS.DELETE_BLOG_POST, payload: { id: blogPostId } })
  }

  const editHandler = () => {
    dispatchEditMode({ type: 'TOGGLE_EDIT_MODE' })
  }

  const [editMode, dispatchEditMode] = useReducer(editModeReducer, false)

  return (
    <div>
      {!editMode && (
        <div key={blogPost.id}>
          <h4>{blogPost.title}</h4>
          <p>{blogPost.body}</p>
          <p>Category: {blogPost.category}</p>
          <p>
            Created On:
            {blogPost.created_at?.toLocaleString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <button
            onClick={(e) => {
              editHandler(e)
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteHandler(blogPost.id)
            }}
          >
            Delete
          </button>
          <hr />
        </div>
      )}
      {editMode && (
        <EditBlogPost
          blogPost={blogPost}
          dispatch={dispatch}
          categories={categories}
          dispatchEditMode={dispatchEditMode}
        />
      )}
    </div>
  )
}

export default ShowBlogPost
