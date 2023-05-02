import React from 'react'
import { ACTIONS } from '../App'

const EditBlogPost = ({ blogPost, dispatch, dispatchEditMode, categories }) => {
  const handleUpdate = (e, blogPostId) => {
    e.preventDefault()

    const form = new FormData(e.target)
    form.append('id', blogPostId)
    dispatch({
      type: ACTIONS.UPDATE_BLOG_POST,
      payload: Object.fromEntries(form),
    })
    dispatchEditMode({type: ACTIONS.EDIT_BLOG_POST})
  }

  return (
    <form
      onSubmit={(e) => {
        handleUpdate(e, blogPost.id)
      }}
      key={blogPost.id}
    >
      <div>
        <label htmlFor="title">Blog Post Title</label>
        <input name="title" defaultValue={blogPost.title} />
      </div>
      <div>
        <label htmlFor="body">Blog Post Body</label>
        <input name="body" defaultValue={blogPost.body} />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="category">
          {categories.map((category) => {
            return (
              <option key={category} name={category} value={category}>
                {category}
              </option>
            )
          })}
        </select>
      </div>
      <button>Update</button>
    </form>
  )
}

export default EditBlogPost
