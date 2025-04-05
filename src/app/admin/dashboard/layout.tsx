'use client';

import { ReactNode } from 'react';

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
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { extractUser } from '../../../../helper/helper';
import Cookies from 'js-cookie';




interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    const route = useRouter()
    const [loading, setLoading] = useState(true)
    const token = Cookies.get('token');
    // console.log(token)

    useEffect(() => {

        if (!token) {
} else {

            axios.post(extractUser, { token }).then((res) => {

                // console.log(res)
                if (res.data.user.isAdmin === false) {
                    toast.error('Login with Admin Account')
                    route.push('/')
                }
                localStorage.key(res.data.user)
                setLoading(false)
            })
        }
    }, [])
    return (
        <>
            {
                loading ? <p className='w-full h-screen flex justify-center items-center text-xl font-semibold'>Loading ..</p> :


                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarInset>
                            <header className="flex sticky top-0 dark:bg-black bg-white h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                                <div className="flex items-center gap-2 px-4">
                                    <SidebarTrigger className="-ml-1" />
                                    <Separator orientation="vertical" className="mr-2 h-4" />
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem className="hidden md:block">
                                                <BreadcrumbLink href="#">
                                                    Building Your Application
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator className="hidden md:block" />
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                            </header>
                            <div className='sm:p-4 w-full h-full dark:bg-black'>


                                {children}
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
            }
        </>

    );
}
