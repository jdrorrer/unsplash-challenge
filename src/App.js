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
        console.log('Error fetching...', err)
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
        console.log('images', data)
      })
      .catch(err => {
        console.log('Error fetching...', err)
      })
  }

  render() {
    return (
      <div className="app-container">
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

        <Footer />
      </div>
    )
  }
}

export default App
