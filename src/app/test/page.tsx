'use client'
import React, { useEffect, useState } from 'react'

function page() {
  const [user, setUser] = useState<any>()

  useEffect(() => {
      
      }, [])
  

    
  return (
    <div className='w-full h-screen p-4'>
      <div>
        firstname = {user?.firstname || 'asdfasdf'} asdf <br />
        lastname = {user?.lastname} <br />
        email = {user?.email}

      </div>
    </div>
  )
}

export default page