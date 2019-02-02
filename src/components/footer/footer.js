import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './footer.css'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="footer-text">
          Made by <strong>Jake Rorrer</strong>
        </p>
        <div className="social-icons">
          <SocialIcon network="twitter" />
          <SocialIcon network="facebook" />
        </div>
      </footer>
    </div>
  )
}
