import React from 'react'
import ReactDOM from 'react-dom'
import Tweet from './pods/tweet/components/Tweet'
const tweets = [
  {
    id: `${Math.random()}${new Date()}`,
    avatar: `https://picsum.photos/${Math.round(Math.random() * 400)}`,
    author: 'gilles',
    timeStamp: new Date('2020-10-06T14:10'),
    message: 'hello world',
  },
  {
    id: `${Math.random()}${new Date()}`,
    avatar: `https://picsum.photos/${Math.round(Math.random() * 400)}`,
    author: 'joelle',
    timeStamp: new Date('2019-10-06T14:10'),
    message: 'hello my house',
  },

  {
    id: `${Math.random()}${new Date()}`,
    avatar: `https://picsum.photos/${Math.round(Math.random() * 400)}`,
    author: 'joelle',
    timeStamp: new Date('2019-10-06T14:10'),
    message: 'hello my house',
  },
]
const App = () => (
  <div className="py-10">
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Base TPK APP
        </h1>
      </div>
    </header>
    <main>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="">
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
