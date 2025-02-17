'use client'
import axios from 'axios'
import { Fascinate } from 'next/font/google'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

// function page() {
//     const route = useRouter()
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//       (async()=>{
//         const res = await axios.get('/api/user/profile')
//         console.log(res)
//         if(res.data.user.isAdmin === false){
//             toast.error('Login with Admin Account')
//             route.push('/')
//         }
//         setLoading(false)
//       })()
//     }, [])

//   return (
//     <>
//     {
//         loading ? <p className='w-full h-screen flex justify-center items-center text-xl font-semibold'>Loading ..</p>:
//     <div>dashboard</div>
//     }

//     </>
//   )
// }

// export default page

import { AppSidebar } from "@/components/dashboard/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const lodgesData = [
    { id: 1, name: "Lodge A", location: "Hazaribagh", address: "Main Road, Hazaribagh", rent: 1500, categories: "Single, Double", ownerNumber: "9876543210" },
    { id: 2, name: "Lodge B", location: "Ranchi", address: "Near Railway Station, Ranchi", rent: 1200, categories: "Single", ownerNumber: "8765432109" },
    { id: 3, name: "Lodge C", location: "Dhanbad", address: "Bank More, Dhanbad", rent: 1000, categories: "Double", ownerNumber: "7654321098" },
];

export default function Page() {
    const route = useRouter()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/user/profile')
            // console.log(res)
            if (res.data.user.isAdmin === false) {
                toast.error('Login with Admin Account')
                route.push('/')
            }
            setLoading(false)
        })()
    }, [])
    return (
        <>
            as
           
        

            {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-y-scroll">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                
            </div> */}
        </>
    )
}
