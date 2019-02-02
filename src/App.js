import React, { Component } from 'react'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import ImageList from './components/image-list/image-list'
import Footer from './components/footer/footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      images: [],
      query: '',
      loading: true
    }
  }

  componentDidMount() {
    this.searchUsers()
  }

  searchUsers = (query = 'chill') => {
    fetch(`https://api.unsplash.com/search/users/?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
      }
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ users: data.results, query, loading: false })
      })
      .catch(err => {
        console.log('Error fetching users...', err)
      })
  }

  getImages = username => {
    return fetch(`https://api.unsplash.com/users/${username}/photos`, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
      }
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ images: data, loading: false })
      })
      .catch(err => {
        console.log('Error fetching images...', err)
      })
  }

  render() {
    return (
      <div className="app-container">
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico|Source+Sans+Pro"
          rel="stylesheet"
        />

        <Header />

        <div className="body-container">
          <Sidebar
            users={this.state.users}
            query={this.state.query}
            onSearch={this.searchUsers}
            onUsernameClick={this.getImages}
          />

          <ImageList images={this.state.images} />
        </div>

        <div className="push" />

        <Footer />
      </div>
    )
  }
}

export default App
