import React from 'react'

export default function LogInAccount() {
  return (
    <div className='create-account-container'>
      <div className='heading'>Log in to Toucan</div>
      <div>
        <button 
          className='btn btn--primary'
        >
          Continue with Google
        </button>
      </div>
      <div>
        <button className='btn btn--secondary'>Continue with email</button>
      </div>
    </div>
  )
}
