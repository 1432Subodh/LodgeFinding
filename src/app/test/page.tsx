'use client'
import React from 'react'

function page() {
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const obj = Object.fromEntries(formData)
    console.log(obj);
  }
  return (
    <div className='w-[100vw] h-[100vh] bg-black'>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username' />
        <input type="email" name="email" id="" />
        <input type="submit" value="submit" />
    </form>
    </div>
  )
}

export default page