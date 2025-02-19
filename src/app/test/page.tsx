'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page() {
  const [user, setUser] = useState<any>()

  const gettingUser = async()=>{
    const user = await axios.get('/api/user/profile')

    console.log(user)
  }
  useEffect(() => {
    axios.get('/api/user/profile').then((res)=>{
      setUser(res.data.user)
    })
  }, [])
  

    
  return (
    <div className='w-full h-screen p-4'>
      <button onClick={gettingUser} className='border p-2'>get user</button>
      <div>
        firstname = {user?.firstname} <br />
        lastname = {user?.lastname} <br />
        email = {user?.email}
      </div>
    </div>
  )
}

export default page