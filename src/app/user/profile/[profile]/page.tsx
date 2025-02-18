'use client'
import LodgeForm from '@/components/lodges/form/lodge-form'
import UserDropdown from '@/components/lodges/user-components'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

 function page() {
    const [user, setUser] = useState<any>(null)
    
    useEffect(() => {
        (async ()=>{

            const res = await axios.get('/api/user/profile')
            console.log(res)
            setUser(res.data.user)
            
           
        })()
    }, [])
    // console.log(user?.firstname)
    
    
    


  return (
    <>
    <div>{user?.firstname} {user?.lastname}</div>
    <p>{user?.email}</p>
    <UserDropdown/>
    <LodgeForm/>
    </>
    // <p>a</p>
  )
}

export default page