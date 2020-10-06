import React from 'react'
import {
  LikeButton,
  MoreOptionsButton,
  ReplyButton,
  ReTweetButton,
} from '../../IconButtons'
import Author from './Author'
import Avatar from './Avatar'
import Message from './Message'
import Time from './Time'

const Tweet = () => (
  <div className="tweet">
    <Avatar />
    <div className="font-medium text-lg leading-6 space-y-1">
      <Author />
      <Time />
      <Message />
      <div className="flex space-x-3 pt-3">
        <ReplyButton />
        <ReTweetButton />
        <LikeButton />
        <MoreOptionsButton />
      </div>
    </div>
  </div>
)

export default Tweet
