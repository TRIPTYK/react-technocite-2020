import React from 'react'
import PropTypes from 'prop-types'
import {
  LikeButton,
  MoreOptionsButton,
  ReplyButton,
  ReTweetButton,
} from './IconButtons'
import Author from './Author'
import Avatar from './Avatar'
import Message from './Message'
import Time from './Time'

const Tweet = ({ tweet }) => {
  const { avatar, timeStamp, message, author } = tweet
  return (
    <div className="tweet">
      <Avatar avatar={avatar} />
      <div className="font-medium text-lg leading-6 space-y-1">
        <Author name={author} />
        <Time timeStamp={timeStamp} />
        <Message message={message} />
        <div className="flex space-x-3 pt-3">
          <ReplyButton />
          <ReTweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}
Tweet.propTypes = {
  tweet: PropTypes.shape({
    avatar: PropTypes.string,
    author: PropTypes.string,
    timeStamp: PropTypes.instanceOf(Date),
    message: PropTypes.string,
  }),
}
export default Tweet
