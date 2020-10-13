import React, { useEffect, useState } from 'react'

const Reddit = () => {
  const [posts, setPosts] = useState([])
  const getRedditData = async () => {
    const { data } = await (
      await fetch('https://www.reddit.com/r/reactjs.json')
    ).json()
    setPosts(data.children.map((child) => child.data))
  }
  useEffect(() => {
    getRedditData()
    return () => {}
  }, [])
  return (
    <div>
      <h2>Reddit list</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Reddit
