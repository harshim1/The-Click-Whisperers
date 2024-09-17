import React from 'react'
import styles from './signup.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <section className={styles.container}>
       <div className={styles.background}>
            <img src = '/assets/background2.svg' alt='backgroundSVG' className={styles.backgroundImage}></img>
        </div> 
        <div className={styles.content}>
           <h3>Create an Account</h3>
            <form>
                <input
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                />
                <input
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                />
                <button type="submit" className={styles.submitButton}>get started</button>
            </form> 
            <div className={styles.login}>
               <p>Already have an account? <Link to="/login">Log In</Link></p> 
            </div>
            
        </div>
        
    </section>
    
  )
}

export default SignUp