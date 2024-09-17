import React from 'react'
import styles from './landing.module.css'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <img src = '/assets/background.svg' alt='backgroundSVG' className={styles.backgroundImage}></img>
      </div>
      <div className={styles.content}>
        <h1>Find the Perfect Influence, <br/>Every Time</h1>
        <p className={styles.description}>Influencer matching: Match generated profiles with real social media influencers based on audience overlap, engagement metrics, and brand alignment</p>
        <Link to="/signup">
          <button className={styles.button}>SIGN UP</button>
        </Link>
      </div>
      
    </section>
  )
}

export default Landing