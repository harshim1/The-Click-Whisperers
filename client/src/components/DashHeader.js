import React from 'react'
import styles from './dash.module.css'
import { Link } from 'react-router-dom'

const DashHeader = () => {
  return (
    <div className={styles.navBar}>
        <Link to="/dash">Home</Link>
        <Link to="/dash/favourites">Favourites</Link>
        <a href="#about">Profile</a>
    </div>
  )
}

export default DashHeader