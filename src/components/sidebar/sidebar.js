import React from 'react'
import './sidebar.css'
import Search from '../search/search'

export default function Sidebar(props) {
  function handleUsernameClick(e, username) {
    e.preventDefault()
    props.onUsernameClick(username)
  }

  const users = props.users.map((user, index) => (
    <li key={index}>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={e => handleUsernameClick(e, user.username)}>
        {user.username}
      </a>
    </li>
  ))

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
