'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    
      axios.get('/api/user/auth/extractcookies').then((res)=>{
        setUser(res.data.user);
        console.log(res)
      }).catch((err)=>console.log('asdf'))
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