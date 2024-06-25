import React from 'react'
import styles from './landing.module.css'

const Landing = () => {
  return (
    <section>
      <div className={styles.background}>
        <img src = '/assets/background.svg' className={styles.backgroundImage}></img>
      </div>
      <div className={styles.content}>
        <h1>Find the Perfect Influence, <br/>Every Time</h1>
        <p>Influencer matching: Match generated profiles with real social media influencers based on audience overlap, engagement metrics, and brand alignment</p>
        <button>SIGN UP</button>
      </div>
      
    </section>
  )
}

export default Landing