import { useReducer } from 'react'
import './App.css'
import ListBlogPosts from './components/ListBlogPosts'
import AddBlogPost from './components/AddBlogPost'
import FilterBlogPosts from './components/FilterBlogPosts'
import SortBlogPost from './components/SortBlogPost'

export const ACTIONS = {
  ADD_BLOG_POST: 'add-blog-post',
  DELETE_BLOG_POST: 'delete-blog-post',
  UPDATE_BLOG_POST: 'update-blog-post',
  EDIT_BLOG_POST: 'edit-blog-post',
  FILTER_BLOG_POST: 'filter-blog-post',
  LIST_CATEGORIES: 'list-categories',
  SORT_BLOG_POST: 'sort-blog-post',
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

const blogPostReducer = (blogPosts, action) => {
  if (action.type === ACTIONS.ADD_BLOG_POST) {
    return [...blogPosts, action.payload]
  }
  if (action.type === ACTIONS.DELETE_BLOG_POST) {
    return blogPosts.filter((blogPost) => {
      return blogPost.id !== action.payload.id ? blogPost : null
    })
  }
  if (action.type === ACTIONS.UPDATE_BLOG_POST) {
    return blogPosts.map((blogPost) => {
      if (blogPost.id === action.payload.id) {
        return action.payload
      }
      return blogPost
    })
  }
  if (action.type === ACTIONS.FILTER_BLOG_POST) {
    return blogPosts.filter((blogPost) => {
      if (
        blogPost.title
          .toLowerCase()
          .includes(action.payload.query.toLowerCase())
      ) {
        return blogPost
      }
    })
  }
  if (action.type === ACTIONS.SORT_BLOG_POST) {
    return blogPosts.filter((blogPost) => {
      if (
        blogPost.category
          .toLowerCase()
          .includes(action.payload.query.toLowerCase())
      ) {
        return blogPost
      }
    })
  }
  if (action.type === ACTIONS.LIST_CATEGORIES) {
    const test = [...new Set(blogPosts.category)]
    console.log(test)
    return test
  }

  // Catch all to return your array
  return blogPosts
}

function App() {
  const [blogPosts, dispatch] = useReducer(blogPostReducer, [
    {
      id: crypto.randomUUID(),
      title: 'First blog post',
      body: 'This is the first blog post ha hash dahdfhasdf',
      category: 'travel',
      created_at: randomDate(new Date(2023, 3, 1), new Date()),
      updated_at: randomDate(new Date(2023, 3, 1), new Date()),
    },
    {
      id: crypto.randomUUID(),
      title: 'Second blog post',
      body: 'This is the second blog post ha hash dahdfhasdf',
      category: 'independent learning',
      created_at: randomDate(new Date(2023, 3, 1), new Date()),
      updated_at: randomDate(new Date(2023, 3, 1), new Date()),
    },
    {
      id: crypto.randomUUID(),
      title: 'Third blog post',
      body: 'This is the three blog post ha hash dahdfhasdf',
      category: 'travel',
      created_at: randomDate(new Date(2023, 3, 1), new Date()),
      updated_at: randomDate(new Date(2023, 3, 1), new Date()),
    },
    {
      id: crypto.randomUUID(),
      title: 'Fourth blog post',
      body: 'This is the fourth blog post ha hash dahdfhasdf',
      category: 'lifestyle',
    },
    {
      id: crypto.randomUUID(),
      title: 'Fifth blog post',
      body: 'This is the fifth blog post ha hash dahdfhasdf',
      category: 'independent learning',
      created_at: randomDate(new Date(2023, 3, 1), new Date()),
      updated_at: randomDate(new Date(2023, 3, 1), new Date()),
    },
  ])

  const [categories, dispatchCategories] = [
    [...new Set(blogPosts.map((blogPost) => blogPost.category))],
  ]

  return (
    <>
      <AddBlogPost dispatch={dispatch} categories={categories} />
      {/* <FilterBlogPosts dispatch={dispatch} /> */}
      < hr/>
      <SortBlogPost dispatch={dispatch} categories={categories} />
      <hr />
      <ListBlogPosts
        blogPosts={blogPosts}
        dispatch={dispatch}
        categories={categories}
      />
    </>
  )
}

export default App
