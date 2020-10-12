import React, { Component } from 'react'
import Todo from './Todo'

class Child extends Component {
  state = { loading: true }
  async componentDidMount() {
    console.log('componentDidMount')
    try {
      const todos = await (
        await fetch('https://jsonplaceholder.typicode.com/todos')
      ).json()
      this.setState({ loading: false, todos: todos })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    if (this.state.loading) {
      return <span>Loading</span>
    }
    return this.state.todos.map((todo) => <Todo key={todo.id} todo={todo} />)
  }
}

export default Child
