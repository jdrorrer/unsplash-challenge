import React from 'react'
import './sidebar.css'
import Search from '../search/search'

export default function Sidebar(props) {
  function handleUsernameClick(e, username) {
    e.preventDefault()
    props.onUsernameClick(username)
  }

  const results = props.users
  let users
  if (results.length > 0) {
    users = results.map((user, index) => (
      <li key={index}>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={e => handleUsernameClick(e, user.username)}>
          {user.username}
        </a>
      </li>
    ))
  } else {
    users = (
      <li className="no-users">
        <h1>No users found. Try searching for another username.</h1>
      </li>
    )
  }

  return (
    <div>
      <Search query={props.query} onSearch={props.onSearch} />
      <ul>{users}</ul>
    </div>
  )
}

Sidebar.defaultProps = {
  users: []
}
