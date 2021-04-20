import React from 'react'

export default function CreateAccount() {
  return (
    <div className='create-account-container'>
      <div className='heading'>Create your Toucan account</div>
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
