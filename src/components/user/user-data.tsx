'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import Link from 'next/link';

function UserData() {
    const [user, setUser] = useState<any>(null)
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        axios.get('/api/user/auth/extractcookies').then((res) => {

            console.log(res)
            if (res.data.user) {

                setUser(res.data.user)

                setIsLogin(false)
            }
        })
    }, [])

    return (
        <>
            {
                isLogin ?
                    <Link href={'/login'}><Button variant={'outline'} size={'sm'} >login</Button> </Link> :

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative w-9 h-9 rounded-full">
                                <Avatar className='w-9 h-9'>
                                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                    <AvatarFallback className='uppercase'>{user?.firstname[0]}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-48 relative right-4">
                            <DropdownMenuLabel className="font-bold">My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" /> Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" /> Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">
                                <LogOut className="mr-2 h-4 w-4" /> Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
            }
        </>
    )
}

export default UserData