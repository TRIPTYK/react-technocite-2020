import React, { useEffect, useState } from 'react'

const DynamicReddit = ({ subreddit }) => {
  const getRedditData = async () => {
    if (subreddit !== '') {
      const { data } = await (
        await fetch(`https://www.reddit.com/r/${subreddit}.json`)
      ).json()
      setPosts(data.children.map((c) => c.data))
    }
  }
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getRedditData()
    return () => {}
  }, [subreddit])
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default DynamicReddit
