'use client'
import { Input } from '@/components/ui/input'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserList from './Tst'
import axios from 'axios'

function page() {
  const [name, setname] = useState()

  const userDispatch = useDispatch()

  const ref: any = useRef(null)

  const submitbtn = async () => {
    // console.log(ref.current?.value)

    const t1 = await axios.get('/api/lodge/get')

  }







  return (
    <div className='grid grid-cols-4 p-4'>
      <div className='grid gap-4'>

        <Input placeholder='enter name' className='' ref={ref} />
        <Input type='button' value='asdf' onClick={submitbtn} />
      </div>

      <div>
        <UserList />
      </div>
    </div>
  )
}

export default page