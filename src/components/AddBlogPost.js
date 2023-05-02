import React, { useEffect } from 'react'
import { ACTIONS } from '../App'

const AddBlogPost = ({ dispatch, categories }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    form.append('id', crypto.randomUUID())
    console.log(Object.fromEntries(form))
    dispatch({ type: ACTIONS.ADD_BLOG_POST, payload: Object.fromEntries(form) })
    e.target.reset()
  }

  // const listCategories = () => {
  //   return dispatch({ type: ACTIONS.LIST_CATEGORIES })
  // }

  const testVal = []

  // useEffect(() => {
  //   const listCategories = () => {
  //     testVal = dispatch({ type: ACTIONS.LIST_CATEGORIES })
  //   }
  // }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Blog Post Title</label>
        <input name="title" />
      </div>
      <div>
        <label htmlFor="body">Blog Post Body</label>
        <input name="body" />
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
      <button>Create Blog Post</button>
    </form>
  )
}

export default AddBlogPost
