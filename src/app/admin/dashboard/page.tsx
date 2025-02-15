'use client'
import axios from 'axios'
import { Fascinate } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function page() {
    const route = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      (async()=>{
        const res = await axios.get('/api/user/profile')
        console.log(res)
        if(res.data.user.isAdmin === false){
            toast.error('Login with Admin Account')
            route.push('/')
        }
        setLoading(false)
      })()
    }, [])
    
  return (
    <>
    {
        loading ? <p className='w-full h-screen flex justify-center items-center text-xl font-semibold'>Loading ..</p>:
    <div>dashboard</div>
    }
    
    </>
  )
}

export default page