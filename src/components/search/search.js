import React, { Component } from 'react'
import './search.css'

export default class Search extends Component {
  state = {
    searchQuery: ''
  }

  onSearchChange = e => {
    this.setState({ searchQuery: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSearch(this.query.value)
    e.currentTarget.reset()
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search by username"
          onChange={this.onSearchChange}
          ref={input => (this.query = input)}
        />
        <button type="submit" id="submit" className="search-button">
          Search
        </button>
      </form>
    )
  }
}
