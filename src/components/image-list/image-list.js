import React from 'react'
import './image-list.css'

export default function ImageList(props) {
  const results = props.images
  let images
  if (results.length > 0) {
    images = results
      .sort((a, b) => b.height - a.height)
      .map(img => (
        <li key={img.id} className="user-image">
          <a href={img.links.html}>
            <img src={img.urls.thumb} alt="Unsplash" />
          </a>
        </li>
      ))
  } else {
    images = (
      <li className="no-images">
        <h1>
          No images found. Please select another user or try a different search.
        </h1>
      </li>
    )
  }
  return <ul className="image-list">{images}</ul>
}
